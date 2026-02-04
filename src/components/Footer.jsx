const Footer = () => {
  return (
    <footer className="border-t border-mist-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-semibold text-ink-900">SWARMSENSE</p>
          <p className="mt-1 text-sm text-ink-600">
            Sistem drone swarm untuk pemantauan, peringatan dini, dan situational awareness.
          </p>
        </div>
        <p className="text-xs text-ink-500">
          Untuk pemantauan & peringatan dini, bukan sistem persenjataan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
