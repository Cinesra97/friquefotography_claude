import Image from "next/image";

const albums = [
  {
    title: "Italy 2026",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/55edb818-4294-4665-b52f-b1d8342d5d21/1763348645613-960985441_wm.jpg",
  },
  {
    title: "Catalina Island 2025",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/d49ed268-a862-4197-9667-76b6aaa82034/1000097181.jpg",
  },
  {
    title: "Microscopy",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/2ecf31e8-ccd6-4270-8a4c-7eddfd892996/71hretRJUYL.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="section">
      <h1 className="page-title">Gallery</h1>
      <div className="grid">
        {albums.map((a) => (
          <div key={a.title} className="album">
            <Image src={a.img} alt={a.title} fill sizes="(max-width: 700px) 100vw, 33vw" />
            <div className="album-label">
              <div className="t">{a.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
