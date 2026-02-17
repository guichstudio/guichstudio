import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const brief = req.body;
    const clientName = brief.nom || brief.name || 'Unknown';
    const clientEmail = brief.email || '';

    // Parse frames
    let frames = [];
    try { frames = JSON.parse(brief.copy_frames || '[]'); } catch {}

    const framesHtml = frames.map((f, i) => `
      <div style="background:#171717;color:#fff;padding:16px 20px;border-radius:8px;margin-bottom:8px">
        <strong style="color:#999">Frame ${f.frame || i + 1}</strong><br>
        <span style="font-size:15px">${esc(f.text)}</span>
        ${f.note ? `<div style="color:#aaa;font-size:13px;margin-top:8px;border-top:1px solid #333;padding-top:8px">📝 ${esc(f.note)}</div>` : ''}
      </div>
    `).join('');

    const html = `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:600px;margin:0 auto;color:#171717">
      <h1 style="font-size:24px;margin-bottom:4px">New Video Brief</h1>
      <p style="color:#666;margin-top:0">From <strong>${esc(clientName)}</strong> ${clientEmail ? `(${esc(clientEmail)})` : ''}</p>
      <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0">

      <h2 style="font-size:16px;color:#999;text-transform:uppercase;letter-spacing:1px">General Idea</h2>
      <p style="font-size:15px">${esc(brief.idee_generale || brief.general_idea || '—')}</p>

      <h2 style="font-size:16px;color:#999;text-transform:uppercase;letter-spacing:1px">Copy</h2>
      ${framesHtml || '<p style="color:#999">No frames</p>'}

      <h2 style="font-size:16px;color:#999;text-transform:uppercase;letter-spacing:1px">Structure</h2>
      <p style="font-size:15px"><strong>${esc(brief.structure || '—')}</strong></p>
      ${brief.structure_detail ? `<p style="font-size:14px;color:#666">${esc(brief.structure_detail)}</p>` : ''}

      <h2 style="font-size:16px;color:#999;text-transform:uppercase;letter-spacing:1px">Sound / Mood</h2>
      <p style="font-size:15px">${esc(brief.sons || brief.sounds || '—')}</p>
      ${formatLinks(brief.son_liens || brief.sound_links)}
      ${brief.son_fichiers || brief.sound_files ? `<p style="font-size:14px;color:#666">📎 ${esc(brief.son_fichiers || brief.sound_files)}</p>` : ''}

      <h2 style="font-size:16px;color:#999;text-transform:uppercase;letter-spacing:1px">Visual Ideas</h2>
      <p style="font-size:15px">${esc(brief.idees_visuelles || brief.visual_ideas || '—')}</p>

      <h2 style="font-size:16px;color:#999;text-transform:uppercase;letter-spacing:1px">Links & Files</h2>
      ${formatLinks(brief.liens || brief.links)}
      ${formatFileList(brief.fichiers_showcase || brief.showcase_files, 'Showcase')}
      ${formatFileList(brief.fichiers_assets || brief.asset_files, 'Assets')}

      <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0">
      <p style="font-size:12px;color:#999">Sent from buildlore.top</p>
    </div>`;

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'BuildLore <onboarding@resend.dev>',
      to: 'guich.studio@gmail.com',
      replyTo: clientEmail || undefined,
      subject: `Video Brief — ${clientName}`,
      html,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Brief email error:', err);
    res.status(500).json({ error: err.message });
  }
}

function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatLinks(str) {
  if (!str) return '';
  const links = str.split(', ').filter(Boolean);
  if (!links.length) return '';
  return links.map(l =>
    `<p style="font-size:14px;margin:4px 0">🔗 <a href="${l}" style="color:#171717">${esc(l)}</a></p>`
  ).join('');
}

function formatFileList(str, label) {
  if (!str) return '';
  const files = str.split(', ').filter(Boolean);
  if (!files.length) return '';
  return `<p style="font-size:14px;color:#666;margin:4px 0">📎 <strong>${label}:</strong> ${files.map(f => esc(f)).join(', ')}</p>`;
}
