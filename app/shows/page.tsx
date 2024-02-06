import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import MasonryGrid from "@/components/UI/MasonryGrid/MasonryGrid";
import Divider from "@/components/UI/Divider/Divider";

const items = [
  { src: "/img/shows/show-1.jpeg", alt: "Description of image 1" },
  { src: "/img/shows/show-2.jpg", alt: "Description of image 2" },
  { src: "/img/shows/show-10.jpg", alt: "Description of image 1" },
  { src: "/img/shows/show-4.jpg", alt: "Description of image 2" },
  { src: "/img/shows/show-5.jpg", alt: "Description of image 1" },
  { src: "/img/shows/show-12.jpg", alt: "Description of image 2" },
  { src: "/img/shows/show-9.jpg", alt: "Description of image 1" },
  { src: "/img/shows/show-3.jpeg", alt: "Description of image 2" },
  { src: "/img/shows/show-6.jpg", alt: "Description of image 1" },
  { src: "/img/shows/show-7.jpeg", alt: "Description of image 2" },
  { src: "/img/shows/show-8.jpg", alt: "Description of image 1" },
  { src: "/img/shows/show-11.jpg", alt: "Description of image 2" },
];

export default function Shows() {
  return (
    <main>
      <Nav />
      <section className="container max-w-screen-xl mx-auto py-40">
        <Divider />
        <h2 className="text-2xl font-bold uppercase">Shows</h2>
        <div className="my-10">
          <MasonryGrid items={items} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
