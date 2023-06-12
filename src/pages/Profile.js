import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">
        Halo aku adalah dzaky, aku adalah fullstack developer yang lulus dari
        NUS
      </p>
    </section>
  );
}
