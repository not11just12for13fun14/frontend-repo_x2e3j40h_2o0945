import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white" aria-label="Tentang Genkan Institute">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">Belajar Jepang yang Relevan & Efektif</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Di Genkan Institute, kami merancang kurikulum sederhana namun solid untuk membangun kebiasaan belajar yang konsisten. Fokus kami pada komunikasi nyata: pengucapan, tata bahasa inti, dan kosakata kerja sehari-hari.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#3E7BFA]" />Kelas kecil dengan pendampingan mentor.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#3E7BFA]" />Materi ringkas, latihan praktis, dan umpan balik cepat.</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#3E7BFA]" />Rekaman kelas dan tugas ringan untuk menjaga ritme.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-gray-200 bg-[#F7FAFF] p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-semibold text-[#1A1A1A]">500+</div>
                <div className="text-xs text-gray-500">Alumni</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#1A1A1A]">4.9/5</div>
                <div className="text-xs text-gray-500">Kepuasan</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#1A1A1A]">100%</div>
                <div className="text-xs text-gray-500">Kelas Online</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Jadwal fleksibel di malam hari dan akhir pekan untuk profesional dan mahasiswa.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
