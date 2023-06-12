import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Selamat datang diwebsite que</h1>
      <p className="section-description">
        Halo semua, ini website aing ! kamu bisa mendapatkan informasi pribadi
        saya loh
      </p>
    </section>
  );
}
