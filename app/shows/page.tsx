import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import MasonryGrid from "@/components/UI/MasonryGrid/MasonryGrid";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";
import SHOWS from "@/app/data/shows.json";

export default function Shows() {
  return (
    <main>
      <Nav />
      <section className="container max-w-screen-xl mx-auto py-20 md:py-40 px-8 md:px-0">
        <Animation
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Divider />
          <h2 className="text-2xl font-bold uppercase">Shows</h2>
          <div className="my-10">
            <MasonryGrid items={SHOWS} />
          </div>
        </Animation>
      </section>
      <Footer />
    </main>
  );
}
