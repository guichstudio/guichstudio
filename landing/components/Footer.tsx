export default function Footer() {
  return (
    <footer className="mt-4 border-t border-neutral-200">
      <div className="container-gs py-12 text-sm opacity-70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} guichstudio — All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-100 opacity-70">
            Instagram
          </a>
          <a href="#" className="hover:opacity-100 opacity-70">
            Behance
          </a>
          <a href="#" className="hover:opacity-100 opacity-70">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
