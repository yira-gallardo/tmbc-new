import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";

export default function TmbcSport() {
  return (
    <main>
      <Nav />
      <Animation
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="container max-w-screen-xl mx-auto py-40 px-8 md:px-0">
          <Divider />
          <h2 className="text-2xl font-bold uppercas py-3.5e my-10">
            TMBC SPORTS
          </h2>
          <h3 className="text-center text-4xl ">PRÓXIMAMENTE</h3>
        </section>
      </Animation>
      <Footer />
    </main>
  );
}
