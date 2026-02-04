import { Shield, KeyRound, ClipboardList, FileCheck } from 'lucide-react';

const items = [
  {
    title: 'Secure boot & integritas firmware',
    description: 'Memastikan perangkat hanya menjalankan kode yang tervalidasi.',
    icon: Shield
  },
  {
    title: 'Key management & kontrol akses berbasis peran',
    description: 'Hak akses ditetapkan berdasarkan peran dan kebutuhan operasional.',
    icon: KeyRound
  },
  {
    title: 'Logging & audit',
    description: 'Pencatatan aktivitas untuk pelacakan dan kepatuhan.',
    icon: ClipboardList
  },
  {
    title: 'Kebijakan penggunaan dan SOP keselamatan',
    description: 'Panduan penggunaan yang menekankan keselamatan dan non-lethal.',
    icon: FileCheck
  }
];

const Security = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">
            Keamanan & Tata Kelola
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">
            Dirancang untuk operasi aman dan patuh
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-3xl border border-mist-200 bg-mist-100 p-6 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Icon size={24} className="text-ocean-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
