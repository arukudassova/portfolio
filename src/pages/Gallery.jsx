import art1 from "../assets/artworks/art1.jpg";
import art2 from "../assets/artworks/art2.jpg";
import art3 from "../assets/artworks/art3.jpeg";
import illust1 from "../assets/artworks/illust1.PNG";
import illust2 from "../assets/artworks/illust2.png";

const artworks = [
  { src: art1, title: ".", year: 2019 },
  { src: art2, title: ".", year: 2019 },
  { src: art3, title: ".", year: 2022 },
  { src: illust1, title: ".", year: 2021 },
  { src: illust2, title: ".", year: 2023 },
];

export default function Gallery() {
  return (
    <main className="page">
      <header className="pageHeader">
        <h1 className="title">Work</h1>
        <p className="subtitle">Selected works. [Page In Progress]</p>
      </header>

      <section className="grid">
        {artworks.map((art, i) => (
          <figure className="card" key={i}>
            <img src={art.src} alt={art.title} />
            <figcaption className="caption">
              {art.title} · {art.year}
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
