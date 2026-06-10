import Image from "next/image";
import Link from "next/link";

const HERO =
  "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/d49ed268-a862-4197-9667-76b6aaa82034/1000097181.jpg";

const albums = [
  {
    title: "Italy 2026",
    sub: "Featured Album",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/55edb818-4294-4665-b52f-b1d8342d5d21/1763348645613-960985441_wm.jpg",
  },
  {
    title: "Catalina Island 2025",
    sub: "Featured Album",
    img: HERO,
  },
  {
    title: "Microscopy",
    sub: "Featured Album",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/2ecf31e8-ccd6-4270-8a4c-7eddfd892996/71hretRJUYL.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src={HERO} alt="Frique Fotography" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <p className="eyebrow">NYC Photographer · Wildlife · Underwater · Macro</p>
          <h1>A world most people would never see firsthand.</h1>
          <p className="lede">
            Eden Buenaventura is a NYC-based photographer. She loves to travel and
            photograph wildlife, architecture, human nature, and everything along the
            way. SCUBA certified, she captures the ethereal — from the reef floor to
            the slide under a microscope.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured Albums</h2>
          <Link href="/gallery" className="more">
            View Gallery 〉
          </Link>
        </div>
        <div className="grid">
          {albums.map((a) => (
            <Link key={a.title} href="/gallery" className="album">
              <Image src={a.img} alt={a.title} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <div className="album-label">
                <div className="t">{a.title}</div>
                <div className="s">{a.sub}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
