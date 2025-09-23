import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [{ href: '/work', label: 'Work' }];

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container-gs flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-custom  text-lg font-semibold tracking-tight"
        >
          Guichstudio
        </Link>
        <ul className="flex items-center gap-5 text-sm">
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
  );
}
