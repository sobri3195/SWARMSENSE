# SWARMSENSE

Website single-page untuk produk **SWARMSENSE — Sistem Drone Swarm sebagai Sensor Udara Kolaboratif (Early Warning & Situational Awareness)** dengan fokus non-lethal.

## Jalankan secara lokal

```bash
npm install
npm run dev
```

## Build produksi

```bash
npm run build
npm run preview
```

## Deploy ke Netlify

1. Pastikan `netlify.toml` sudah tersedia di root proyek.
2. Buat site baru di Netlify dan hubungkan repository ini.
3. Konfigurasi build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Pengalihan SPA sudah diaktifkan melalui `netlify.toml` dan `public/_redirects`.

## Struktur proyek

```
.
├── netlify.toml
├── public
│   └── _redirects
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components
│   │   ├── Architecture.jsx
│   │   ├── Contact.jsx
│   │   ├── DemoPanel.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── FeatureGrid.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Roadmap.jsx
│   │   └── Security.jsx
│   └── utils
│       └── scroll.js
└── package.json
```
