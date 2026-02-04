import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import Architecture from './components/Architecture.jsx';
import Roadmap from './components/Roadmap.jsx';
import Security from './components/Security.jsx';
import DemoPanel from './components/DemoPanel.jsx';
import FAQAccordion from './components/FAQAccordion.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-mist-100 text-ink-900">
      <Navbar />
      <main>
        <section id="beranda">
          <Hero />
        </section>

        <section id="solusi" className="bg-mist-100">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-mist-200 bg-white p-8 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">
                  Masalah
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900">
                  Tantangan pemantauan udara modern
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-ink-700">
                  <li>• Blind spot pada pengawasan area yang luas.</li>
                  <li>• Objek kecil sulit dilacak dari satu sudut pandang.</li>
                  <li>• Keterbatasan ketahanan dan jangkauan platform tunggal.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-mist-200 bg-white p-8 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-500">
                  Solusi
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-ink-900">
                  Swarm sebagai sensor kolaboratif
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-ink-700">
                  <li>• Drone swarm berbagi data untuk cakupan yang lebih luas.</li>
                  <li>• Redundansi menjaga misi saat sebagian unit terganggu.</li>
                  <li>• Pemetaan situasional real-time untuk peringatan dini.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="fitur">
          <FeatureGrid />
        </section>

        <section id="arsitektur">
          <Architecture />
        </section>

        <section id="roadmap">
          <Roadmap />
        </section>

        <section id="keamanan">
          <Security />
        </section>

        <section id="demo">
          <DemoPanel />
        </section>

        <section id="faq">
          <FAQAccordion />
        </section>

        <section id="kontak">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
