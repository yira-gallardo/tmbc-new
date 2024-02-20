import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";
import ARTISTS from "@/app/data/artists.json";

export default function NewsPress() {
  const NEWS = ARTISTS.filter((artist) => artist.news !== undefined)
    .map((artist) => artist.news)
    .flat();
  return (
    <main>
      <Nav />
      <Animation
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="container max-w-screen-xl mx-auto py-20 md:py-40 px-8 md:px-0">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">News / Press</h2>
          {NEWS.map((newsItem: any, numeroIndice: number) => (
            <div className="grid grid-cols-4 gap-10 mt-10 items-center">
              <div className="col-span-4 md:col-span-1">
                <Link key={numeroIndice} href={newsItem.link}>
                  <Image
                    src={newsItem.image}
                    alt="News 1"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </Link>
              </div>
              <div className="col-span-4 md:col-span-3">
                <h3 className="text-xl font-bold mt-5 text-slate-900"></h3>
                <p className="text-sm mt-3"> {newsItem.title}</p>

                <Link href="/" className="font-bold my-4 block">
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </section>
      </Animation>
      <Footer />
    </main>
  );
}
