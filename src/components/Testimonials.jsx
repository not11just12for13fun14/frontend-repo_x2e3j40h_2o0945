import { motion } from 'framer-motion';

const data = [
  {
    nama: 'Rani',
    teks: 'Materinya rapi dan mudah dicerna. Setelah 2 bulan, aku mulai berani ngobrol dasar dengan rekan Jepang.',
  },
  {
    nama: 'Adi',
    teks: 'Mentornya suportif dan sabar. Tugasnya ringan tapi konsisten, bikin progres terasa.',
  },
  {
    nama: 'Maya',
    teks: 'Kelas malam cocok untukku yang kerja. Rekaman kelas sangat membantu saat ketinggalan.',
  },
];

function TestimonialCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <p className="text-gray-700">“{item.teks}”</p>
      <div className="mt-4 text-sm font-medium text-[#1A1A1A]">— {item.nama}</div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white" aria-label="Testimoni">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">Apa Kata Mereka</h2>
          <p className="mt-3 text-gray-600">Cerita singkat dari para pembelajar di Genkan Institute.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((d) => (
            <TestimonialCard key={d.nama} item={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
