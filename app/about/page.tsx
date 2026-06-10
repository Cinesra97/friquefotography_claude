import Image from "next/image";

const cameras = [
  {
    cap: "First Film Camera",
    name: "Olympus Shoot & Go R",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/45a6ba89-147a-4a91-8039-359243e50eca/Screenshot_20260421_093941_Etsy.jpg",
  },
  {
    cap: "First Digital Camera",
    name: "Olympus Stylus 410",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/098ad5f0-d1ee-4f36-a677-35a8db82d8ee/Stylus410specs.jpg",
  },
  {
    cap: "First Underwater Camera",
    name: "Vivitar Aquashot Underwater Digital Camera",
    img: "https://images.squarespace-cdn.com/content/v1/69e6bf7a46fc6c1a500b3016/2ecf31e8-ccd6-4270-8a4c-7eddfd892996/71hretRJUYL.jpg",
  },
];

export default function About() {
  return (
    <section className="section">
      <h1 className="page-title">About</h1>
      <div className="prose">
        <p>
          Eden was gifted her first camera at age 6 and has been photographing ever
          since.
        </p>
        <p>
          She has been published in several literary magazines, Best of College
          Photography books, and won awards at local photography contests.
        </p>
        <p>
          Eden is the current Treasurer and a member of the{" "}
          <a href="https://www.pennsouthphotoclub.org/" target="_blank" rel="noopener noreferrer">
            Penn South Photography Club
          </a>
          .
        </p>
        <p>Here are a few of her earliest cameras, remembered fondly:</p>
      </div>

      <div className="gear">
        {cameras.map((c) => (
          <div className="item" key={c.name}>
            <div className="cap">{c.cap}</div>
            <div className="name">{c.name}</div>
          </div>
        ))}
      </div>

      <div className="grid" style={{ marginTop: "2.5rem" }}>
        {cameras.map((c) => (
          <div className="album" key={c.img} style={{ aspectRatio: "1 / 1" }}>
            <Image src={c.img} alt={c.name} fill sizes="(max-width: 700px) 100vw, 33vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
