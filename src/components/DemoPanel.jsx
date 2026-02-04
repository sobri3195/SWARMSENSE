const tracks = [
  { id: 'TRK-021', status: 'Terpantau', confidence: 'Tinggi', lastSeen: '10 dtk lalu' },
  { id: 'TRK-033', status: 'Validasi', confidence: 'Sedang', lastSeen: '22 dtk lalu' },
  { id: 'TRK-047', status: 'Terpantau', confidence: 'Tinggi', lastSeen: '35 dtk lalu' },
  { id: 'TRK-058', status: 'Pemantauan', confidence: 'Sedang', lastSeen: '1 mnt lalu' }
];

const alerts = [
  'Anomali cuaca ringan terdeteksi di sektor barat.',
  'Perlu verifikasi ulang pada objek kecil di sektor utara.',
  'Kualitas sinyal menurun, mode degradasi aman aktif.'
];

const DemoPanel = () => {
  return (
    <section className="bg-mist-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">Demo</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">Mock dashboard situational awareness</h2>
          <p className="mt-3 text-sm text-ink-700">
            Semua data di bawah ini adalah dummy untuk ilustrasi tampilan.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-mist-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink-900">Peta</h3>
              <span className="rounded-full bg-mist-100 px-3 py-1 text-xs text-ink-600">Live</span>
            </div>
            <div className="mt-4 flex h-64 items-center justify-center rounded-2xl border border-dashed border-mist-200 bg-mist-100 text-sm text-ink-500">
              Placeholder peta situasional (dummy)
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-mist-100 p-4">
                <p className="text-xs uppercase text-ink-500">Cakupan aktif</p>
                <p className="text-lg font-semibold text-ink-900">12 sektor</p>
              </div>
              <div className="rounded-2xl bg-mist-100 p-4">
                <p className="text-xs uppercase text-ink-500">Status jaringan</p>
                <p className="text-lg font-semibold text-ink-900">Stabil</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-mist-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink-900">Daftar Track</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                {tracks.map((track) => (
                  <li key={track.id} className="rounded-2xl bg-mist-100 p-3">
                    <div className="flex items-center justify-between font-semibold text-ink-900">
                      <span>{track.id}</span>
                      <span className="text-xs text-ocean-500">{track.status}</span>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-ink-600">
                      <span>Confidence: {track.confidence}</span>
                      <span>Last seen: {track.lastSeen}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-mist-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink-900">Notifikasi</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                {alerts.map((alert) => (
                  <li key={alert} className="rounded-2xl bg-mist-100 p-3">
                    {alert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPanel;
