import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Apakah SWARMSENSE dirancang untuk operasi ofensif?',
    answer:
      'Tidak. SWARMSENSE hanya untuk pemantauan, peringatan dini, dan keselamatan operasional. Sistem tidak memuat fungsi ofensif.'
  },
  {
    question: 'Bagaimana data dilindungi selama operasi?',
    answer:
      'Semua komunikasi dilindungi enkripsi, autentikasi perangkat, serta logging yang mendukung audit dan kepatuhan.'
  },
  {
    question: 'Apakah sistem ini dapat diintegrasikan dengan pusat komando?',
    answer:
      'Ya, dashboard dirancang untuk integrasi data situasional dengan pusat komando atau SOC yang sudah ada.'
  },
  {
    question: 'Apa yang terjadi saat koneksi melemah?',
    answer:
      'Sistem masuk ke mode degradasi aman (fail-soft) agar pemantauan tetap berjalan tanpa risiko keselamatan.'
  },
  {
    question: 'Bagaimana kebijakan tata kelola diterapkan?',
    answer:
      'SWARMSENSE menekankan SOP keselamatan, kontrol akses berbasis peran, dan audit trail untuk setiap aktivitas.'
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900">Pertanyaan yang sering diajukan</h2>
          <p className="mt-3 text-sm text-ink-700">
            Disclaimer: solusi ini fokus pada pemantauan dan peringatan dini non-lethal.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-3xl border border-mist-200 bg-mist-100">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-ink-900 focus-ring"
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`transition ${isOpen ? 'rotate-180 text-ocean-500' : 'text-ink-400'}`}
                  />
                </button>
                {isOpen && <p className="px-6 pb-5 text-sm text-ink-700">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
