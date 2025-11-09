import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Registration({ presetClass }) {
  const [form, setForm] = useState({ nama: '', email: '', kelas: presetClass || '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Saat backend tersedia, kirim form ke API. Untuk sekarang tampilkan konfirmasi.
    setSubmitted(true);
  };

  return (
    <section id="daftar" className="bg-white" aria-label="Form Pendaftaran">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">Daftar Kelas</h2>
          <p className="mt-3 text-gray-600">Isi data singkat di bawah ini. Kami akan menghubungi melalui email dalam 1x24 jam.</p>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800">
            Terima kasih! Pendaftaran untuk <b>{form.kelas || 'kelas pilihanmu'}</b> sudah kami terima. Pantau email untuk langkah berikutnya.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-[#1A1A1A]">Nama Lengkap</label>
              <input
                id="nama"
                name="nama"
                type="text"
                required
                value={form.nama}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none transition focus:border-[#3E7BFA]"
                placeholder="Contoh: Raka Pratama"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A]">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none transition focus:border-[#3E7BFA]"
                placeholder="nama@email.com"
              />
            </div>
            <div>
              <label htmlFor="kelas" className="block text-sm font-medium text-[#1A1A1A]">Pilih Kelas</label>
              <select
                id="kelas"
                name="kelas"
                required
                value={form.kelas}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-[#1A1A1A] outline-none transition focus:border-[#3E7BFA]"
              >
                <option value="">Pilih level</option>
                <option value="A0 – Dasar Pemula">A0 – Dasar Pemula</option>
                <option value="A1 – Pemahaman Dasar">A1 – Pemahaman Dasar</option>
                <option value="A2 – Menengah Awal">A2 – Menengah Awal</option>
              </select>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full rounded-lg bg-[#3E7BFA] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3E7BFA]/30">
                Kirim Pendaftaran
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
