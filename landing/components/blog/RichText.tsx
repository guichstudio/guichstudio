import Link from 'next/link';
import { Fragment, ReactNode } from 'react';

// Minimal inline formatter: **bold** and [label](href).
// Anything else is rendered as plain text on purpose, no HTML is ever injected.

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export default function RichText({ text }: { text: string }): JSX.Element {
  const parts = text.split(TOKEN).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{renderPart(part)}</Fragment>
      ))}
    </>
  );
}

function renderPart(part: string): ReactNode {
  if (part.startsWith('**') && part.endsWith('**')) {
    return <strong className="font-semibold">{part.slice(2, -2)}</strong>;
  }

  const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
  if (link) {
    const [, label, href] = link;
    if (href.startsWith('/') || href.startsWith('#')) {
      return (
        <Link
          href={href}
          className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition"
        >
          {label}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition"
      >
        {label}
      </a>
    );
  }

  return part;
}
