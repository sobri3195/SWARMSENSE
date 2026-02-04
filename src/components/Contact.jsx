const Contact = () => {
  return (
    <section className="bg-mist-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">Kontak</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-900">Diskusikan kebutuhan pemantauan Anda</h2>
            <p className="mt-4 text-sm text-ink-700">
              Tim kami siap mendemokan fitur, membahas tata kelola, dan menyusun rencana pilot sesuai
              kebutuhan organisasi.
            </p>
          </div>
          <form className="rounded-3xl border border-mist-200 bg-white p-6 shadow-soft">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-ink-700">
                Nama
                <input
                  type="text"
                  name="name"
                  placeholder="Nama lengkap"
                  className="mt-2 w-full rounded-2xl border border-mist-200 px-4 py-3 text-sm text-ink-900 focus-ring"
                />
              </label>
              <label className="text-sm font-medium text-ink-700">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  className="mt-2 w-full rounded-2xl border border-mist-200 px-4 py-3 text-sm text-ink-900 focus-ring"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-ink-700">
              Pesan
              <textarea
                name="message"
                placeholder="Ceritakan kebutuhan pemantauan Anda..."
                rows="5"
                className="mt-2 w-full rounded-2xl border border-mist-200 px-4 py-3 text-sm text-ink-900 focus-ring"
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ocean-600 focus-ring"
            >
              Kirim Pesan
            </button>
            <p className="mt-3 text-xs text-ink-600">
              Form ini tanpa backend. Tim akan menghubungi Anda secara manual.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
