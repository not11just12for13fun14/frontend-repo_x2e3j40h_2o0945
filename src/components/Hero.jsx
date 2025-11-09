import { motion } from 'framer-motion';

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F7FAFF]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#3E7BFA]" />
            Belajar Jepang Modern & Terstruktur
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
            Genkan Institute
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Kursus bahasa Jepang online yang ramah pemula, fokus pada percakapan praktis, tata bahasa inti, dan budaya kerja Jepang.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={onCtaClick}
              className="rounded-lg bg-[#3E7BFA] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3E7BFA]/30"
            >
              Daftar Kelas
            </button>
            <a
              href="#program"
              className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-[#1A1A1A] transition hover:border-gray-300"
            >
              Lihat Program
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[48px] bg-gradient-to-t from-[#3E7BFA]/10 to-transparent blur-2xl"
        />
      </div>
    </section>
  );
}
