export default function Footer() {
  return (
    <footer className="mt-4 border-t border-neutral-200">
      <div className="container-gs py-8 text-sm opacity-70 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} guichstudio — All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/guich.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 opacity-70"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
