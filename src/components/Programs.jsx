import { motion } from 'framer-motion';

const programs = [
  {
    level: 'A0 – Dasar Pemula',
    jadwal: 'Selasa & Kamis, 19.00–20.30 WIB',
    harga: 'Rp450.000 / bulan',
    fitur: ['Hiragana & Katakana', 'Frasa harian', 'Perkenalan diri']
  },
  {
    level: 'A1 – Pemahaman Dasar',
    jadwal: 'Senin & Rabu, 19.00–20.30 WIB',
    harga: 'Rp550.000 / bulan',
    fitur: ['Tata bahasa N5', 'Percakapan kerja', 'Latihan mendengar']
  },
  {
    level: 'A2 – Menengah Awal',
    jadwal: 'Sabtu, 09.00–11.00 WIB',
    harga: 'Rp650.000 / bulan',
    fitur: ['Pola N4', 'Percakapan situasional', 'Membaca pendek']
  },
];

function Card({ p, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-[#1A1A1A]">{p.level}</h3>
        <span className="rounded-full bg-[#F0F5FF] px-3 py-1 text-xs text-[#3E7BFA]">{p.harga}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{p.jadwal}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {p.fitur.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3E7BFA]" />{f}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onSelect(p.level)}
        className="mt-6 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-[#1A1A1A] transition hover:border-[#3E7BFA] hover:text-[#3E7BFA]"
      >
        Pilih Kelas
      </button>
    </motion.div>
  );
}

export default function Programs({ onSelect }) {
  return (
    <section id="program" className="bg-[#F7FAFF]" aria-label="Program Kelas">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">Program Kelas</h2>
          <p className="mt-3 text-gray-600">Pilih level yang sesuai dengan tujuanmu. Semua kelas berlangsung online via Zoom.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Card key={p.level} p={p} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}
