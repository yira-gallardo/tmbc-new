import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";
import MUSIC from "@/app/data/music.json";

export default function Music() {
  return (
    <main>
      <Nav />
      <Animation
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="container max-w-screen-xl mx-auto py-40">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">Music</h2>

          <div className="grid grid-cols-5 my-20">
            {MUSIC.map((item, index) => (
              <Link key={index} href={item.link} className="w-full relative">
                <Image
                  src={item.image}
                  alt="Danna Paola - Nombre de la canción"
                  width={1000}
                  height={1000}
                  unoptimized={true}
                />
                <div className="absolute top-0 opacity-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center font-bold text-white text-2xl hover:opacity-100">
                  Escuchar
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Animation>
      <Footer />
    </main>
  );
}
