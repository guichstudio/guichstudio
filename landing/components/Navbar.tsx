import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [{ href: '/work', label: 'Work' }];

function getCalendlyUrl() {
  const now = new Date();
  const m = now.getMonth() + 1;
  const y = now.getFullYear();
  return `https://calendly.com/guichstudio/30min?back=1&month=${y}-${m.toString().padStart(2, '0')}`;
}

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav className="container-gs flex items-center justify-between py-4">
          <Link href="/" className="font-bigcaslon text-2xl tracking-tight">
            BuildLore
          </Link>
          <ul className="flex items-center gap-5 text-lg">
            {links.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`hover:opacity-100 opacity-70 transition ${router.pathname === l.href ? 'opacity-100 underline underline-offset-4' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Sticky bottom CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href={getCalendlyUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-3 text-sm font-medium shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
        >
          Book a call
        </a>
      </div>
    </>
  );
}
