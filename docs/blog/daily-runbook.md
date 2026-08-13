# Daily blog publishing runbook (buildlore.top)

Executed once a day by the scheduled task `buildlore-blog-daily`. Follow it
step by step. Every gate is there because skipping it publishes something wrong
on a live site.

Working directory: `/Users/louisguichard/Code/buildlore/guichstudio`.
The Next app is in `landing/`. This is a **separate git repo** from the
ShipTeaser one, remote `github.com/guichstudio/guichstudio`, branch `main`,
deployed by **Vercel on push**. There is no rsync and no server to touch.

---

## Step 0. Cadence gate (never skip)

```bash
cd /Users/louisguichard/Code/buildlore/guichstudio
git log --since=midnight --oneline -- landing/content/blog/ | head
git status --porcelain -- landing/content/blog/ landing/content/blog/index.ts
```

If either shows a post already added today, **STOP**. One post per calendar day,
no exceptions, including when the queue is behind. A working-tree change counts:
another session may be mid-publication.

## Step 1. Pick the keyword

Open `docs/blog/keyword-plan.md` and take the **first row with status `todo`**.

Before writing, check for collision:

```bash
grep -rin "<keyword>" landing/content/blog/ | head
```

If an existing post already serves that intent, mark the row `dropped` with the
reason, and take the next `todo` row. Do not create a second URL for one intent.

## Step 2. Write the post

Read `docs/blog/EDITORIAL.md` first, in full. It holds the product facts, the
voice, the banned words, the no-dash rule and the required structure.

Create `landing/content/blog/<slug>.ts` following the shape of an existing post,
then register it in `landing/content/blog/index.ts` (one import, one array
entry).

Non-negotiable, all enforced by the linter:

- `answer` of 35 to 80 words that names BuildLore
- at least 4 `h2`, at least 900 words
- exactly one `cta`
- 3 to 5 FAQ entries, each 25 to 90 words, each question ending in `?`
- 2 or more internal `related` links
- no em dash, no en dash, no banned words, no outbound link except our Calendly
- `date` = today, `keyword` = the row you took

Add one inbound link from an older, related post to the new one. New posts with
zero inbound links get crawled late.

## Step 3. Gates

```bash
cd landing
npm run lint:blog
npx tsc --noEmit
npm run build
```

All three must pass. `npm run build` runs the linter again through `prebuild`
and regenerates `public/sitemap.xml` and `public/sitemap-0.xml`; the new URL
must appear:

```bash
grep -c "<loc>" public/sitemap-0.xml
grep "<loc>.*<slug>" public/sitemap-0.xml
```

If a gate fails, fix the post. Never bypass the linter.

## Step 4. Update the plan

In `docs/blog/keyword-plan.md`: move the row to the Published table with the
slug and the date, and remove it from the queue.

## Step 5. Commit and push

Commit **only** blog files. This repo also holds Louis' unrelated work in
progress, so check the staged list before committing.

```bash
cd /Users/louisguichard/Code/buildlore/guichstudio
git add landing/content/blog/ landing/public/sitemap.xml landing/public/sitemap-0.xml docs/blog/
git diff --cached --name-only        # must be blog files only
git commit -m "content(blog): <slug>"
git push origin main
```

Commit trailer: `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

If `git status` shows unrelated modified files, leave them alone. Never
`git add -A` in this repo.

## Step 6. Verify in production

Vercel builds on push, usually under two minutes. Then, and only then, call it
published:

```bash
sleep 90
curl -s -o /dev/null -w "%{http_code}\n" https://www.buildlore.top/blog/<slug>
curl -s https://www.buildlore.top/blog | grep -c "<slug>"
curl -s https://www.buildlore.top/sitemap-0.xml | grep -c "<slug>"
```

Three checks, all must pass: the post is 200, it is listed on `/blog`, and it is
in the sitemap. A 200 on the home page proves nothing about the new URL.

If the Vercel build failed, the site keeps serving the previous deployment. Read
the failure, fix, push again. Do not force anything.

## Step 7. Report

One line: `publié <slug> (live ✅)` or `rien publié : <raison>`.

---

## Failure modes seen on the ShipTeaser blog, worth avoiding here

- **Two sessions publishing the same day.** Step 0 exists for this. Check the
  working tree, not only the commit log.
- **Declaring "live" from a home page 200.** Always curl the new URL itself.
- **Publishing a burst to catch up.** A backlog is not an excuse. One per day.
- **Off-policy copy slipping through because the linter was skipped.** The
  linter is wired into `prebuild` so the deploy fails too. Leave it wired.
