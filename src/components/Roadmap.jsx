const phases = [
  {
    title: 'Desain',
    detail: 'Blueprint sistem, kebutuhan regulator, dan protokol keselamatan.',
    kpi: 'KPI: definisi kebutuhan operasi dan tata kelola.'
  },
  {
    title: 'Simulasi',
    detail: 'Pengujian model swarm dan evaluasi risiko di lingkungan virtual.',
    kpi: 'KPI: validasi skenario pemantauan dan performa baseline.'
  },
  {
    title: 'Prototipe Terbatas',
    detail: 'Uji coba terbatas dengan data dummy dan prosedur keselamatan.',
    kpi: 'KPI: stabilitas komunikasi dan kepatuhan SOP.'
  },
  {
    title: 'Pilot Skala Menengah',
    detail: 'Implementasi pilot dengan pengawasan penuh dan audit berkala.',
    kpi: 'KPI: kesiapan operasional dan evaluasi keamanan siber.'
  }
];

const Roadmap = () => {
  return (
    <section className="bg-mist-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">Roadmap</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">Tahapan pengembangan bertanggung jawab</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              className="rounded-3xl border border-mist-200 bg-white p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase text-ocean-500">Tahap {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink-900">{phase.title}</h3>
              <p className="mt-3 text-sm text-ink-700">{phase.detail}</p>
              <p className="mt-4 rounded-2xl bg-mist-100 px-4 py-2 text-xs text-ink-600">
                {phase.kpi}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
