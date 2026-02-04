import { ArrowRight } from 'lucide-react';

const blocks = [
  {
    title: 'Drone Layer',
    bullets: ['Sensor multi-sudut', 'Pengumpulan data lingkungan', 'Pemantauan non-lethal']
  },
  {
    title: 'Swarm Coordination',
    bullets: ['Fusi data kolektif', 'Penjadwalan sektor', 'Redundansi jaringan']
  },
  {
    title: 'Secure Comms',
    bullets: ['Enkripsi end-to-end', 'Otentikasi perangkat', 'Kualitas layanan adaptif']
  },
  {
    title: 'Command Center Dashboard',
    bullets: ['Peta situasional live', 'Analitik peringatan dini', 'Audit & laporan']
  }
];

const Architecture = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">Arsitektur</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">
            Alur blok sederhana untuk pemantauan kolaboratif
          </h2>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            {blocks.map((block, index) => (
              <div key={block.title} className="flex items-center gap-4">
                <div className="rounded-3xl border border-mist-200 bg-mist-100 p-6 shadow-soft">
                  <h3 className="text-lg font-semibold text-ink-900">{block.title}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-ink-700">
                    {block.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
                {index < blocks.length - 1 && (
                  <ArrowRight className="text-ink-400" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-ink-600">
            Arsitektur dirancang untuk deteksi, pelacakan, dan pemetaan situasional yang patuh
            terhadap tata kelola dan keselamatan operasi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
