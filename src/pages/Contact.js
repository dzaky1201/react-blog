import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">
        kamu bisa menghubungi kontak dibawah ini ya :
      </p>
      <ul>
        <li>WA : 085176541236</li>
        <li>email : dzaky@mantap.com</li>
      </ul>
      <p className="section-description">
        kamu bisa melihat sosmedku dibawah ini ya :
      </p>
      <ul>
        <li>
          <a href="https://facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
