import { ArrowRight, Download } from 'lucide-react';
import { scrollToId } from '../utils/scroll';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">
            Sistem Drone Swarm • Non-Lethal Monitoring
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-ink-900 md:text-5xl">
            Swarm Sensor Udara untuk Peringatan Dini yang Lebih Luas dan Tangguh
          </h1>
          <p className="text-lg text-ink-700">
            SWARMSENSE menghadirkan pemantauan udara kolaboratif untuk deteksi, pelacakan, dan
            pemetaan situasional secara aman. Fokus pada keselamatan, tata kelola, dan keamanan
            siber—tanpa kemampuan ofensif.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToId('demo')}
              className="inline-flex items-center gap-2 rounded-full bg-ocean-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ocean-600 focus-ring"
            >
              Lihat Demo <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToId('kontak')}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition hover:bg-mist-200 focus-ring"
            >
              Unduh Whitepaper <Download size={18} />
            </button>
          </div>
          <p className="text-xs text-ink-600">
            Untuk pemantauan dan peringatan dini, bukan sistem persenjataan.
          </p>
        </div>
        <div className="rounded-3xl border border-mist-200 bg-mist-100 p-8 shadow-soft">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-ink-500">Status Operasi</p>
              <p className="text-2xl font-semibold text-ink-900">Situational Awareness Aktif</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-ink-500">Cakupan Sensor</p>
              <p className="text-lg font-semibold text-ink-900">Multi-sudut & redundant</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase text-ink-500">Keamanan Sistem</p>
              <p className="text-lg font-semibold text-ink-900">Enkripsi end-to-end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
