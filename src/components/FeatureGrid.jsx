import {
  Radar,
  Layers,
  ShieldCheck,
  Map,
  LayoutGrid,
  Fence,
  Plane,
  Route,
  Relay,
  Lock,
  ServerCog,
  History
} from 'lucide-react';

const features = [
  {
    title: 'Deteksi & Pelacakan Multi-Sudut',
    description: 'Mengurangi blind spot dengan perspektif sensor yang saling melengkapi.',
    icon: Radar
  },
  {
    title: 'Fusi Data Real-time',
    description: 'Menggabungkan data multi-sumber untuk gambaran yang konsisten.',
    icon: Layers
  },
  {
    title: 'Penilaian Risiko Otomatis',
    description: 'Mengurutkan prioritas peringatan dengan konteks lingkungan.',
    icon: ShieldCheck
  },
  {
    title: 'Peta Situasional Live',
    description: 'Dashboard interaktif untuk pemantauan wilayah secara menyeluruh.',
    icon: Map
  },
  {
    title: 'Pembagian Sektor & Cakupan',
    description: 'Distribusi beban pemantauan agar efisien dan tidak tumpang tindih.',
    icon: LayoutGrid
  },
  {
    title: 'Geofencing & Batas Operasi Aman',
    description: 'Menjaga kepatuhan terhadap batas area operasional.',
    icon: Fence
  },
  {
    title: 'Anti-Tabrakan & Deconfliction',
    description: 'Algoritma jarak aman untuk menjaga keberlangsungan misi.',
    icon: Plane
  },
  {
    title: 'Mode Patroli Otonom',
    description: 'Rute patroli adaptif untuk pengawasan rutin.',
    icon: Route
  },
  {
    title: 'Handover Pemantauan',
    description: 'Serah terima antar unit secara mulus untuk kontinuitas.',
    icon: Relay
  },
  {
    title: 'Komunikasi Aman (Enkripsi & Autentikasi)',
    description: 'Pertukaran data dilindungi dengan kontrol akses yang ketat.',
    icon: Lock
  },
  {
    title: 'Mode Degradasi Aman (Fail-Soft)',
    description: 'Operasi tetap aman saat jaringan atau sensor terganggu.',
    icon: ServerCog
  },
  {
    title: 'Audit Trail & Playback',
    description: 'Pelacakan aktivitas untuk evaluasi dan kepatuhan.',
    icon: History
  }
];

const FeatureGrid = () => {
  return (
    <section className="bg-mist-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">Fitur Utama</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">
            Kapabilitas kunci untuk pemantauan udara kolaboratif yang aman
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-mist-200 bg-white p-6 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mist-100">
                  <Icon className="text-ocean-500" size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
