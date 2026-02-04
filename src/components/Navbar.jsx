import { scrollToId } from '../utils/scroll';

const navItems = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'solusi', label: 'Solusi' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'arsitektur', label: 'Arsitektur' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'keamanan', label: 'Keamanan' },
  { id: 'demo', label: 'Demo' },
  { id: 'faq', label: 'FAQ' },
  { id: 'kontak', label: 'Kontak' }
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
        aria-label="Navigasi utama"
      >
        <button
          type="button"
          onClick={() => scrollToId('beranda')}
          className="text-lg font-semibold tracking-wide text-ink-900 focus-ring"
        >
          SWARMSENSE
        </button>
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-ink-700">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToId(item.id)}
                className="rounded-full px-3 py-1 transition hover:bg-mist-200 focus-ring"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
