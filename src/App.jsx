import { useRef, useState } from 'react';
import Hero from './components/Hero';
import Programs from './components/Programs';
import CombinedInfo from './components/CombinedInfo';
import Registration from './components/Registration';

function App() {
  const daftarRef = useRef(null);
  const [presetClass, setPresetClass] = useState('');

  const scrollToForm = () => {
    daftarRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProgram = (level) => {
    setPresetClass(level);
    scrollToForm();
  };

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">Genkan Institute</a>
          <nav className="hidden gap-6 text-sm text-gray-600 md:flex">
            <a href="#about" className="hover:text-[#3E7BFA] transition">Tentang</a>
            <a href="#program" className="hover:text-[#3E7BFA] transition">Program</a>
            <a href="#daftar" className="hover:text-[#3E7BFA] transition">Daftar</a>
          </nav>
          <button onClick={scrollToForm} className="rounded-lg bg-[#3E7BFA] px-4 py-2 text-xs font-medium text-white">Daftar Kelas</button>
        </div>
      </header>

      <Hero onCtaClick={scrollToForm} />
      <CombinedInfo />
      <Programs onSelect={handleSelectProgram} />

      <div ref={daftarRef}>
        <Registration presetClass={presetClass} />
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Genkan Institute. Semua hak dilindungi.</p>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-[#3E7BFA]">Tentang</a>
              <a href="#program" className="hover:text-[#3E7BFA]">Program</a>
              <a href="#daftar" className="hover:text-[#3E7BFA]">Daftar</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
