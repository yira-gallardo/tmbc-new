import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* NAV MENU */}
      <Nav />

      {/* HERO */}
      <section className="video flex items-center justify-center ">
        <div className="max-w-screen-lg">
          <iframe
            width="860"
            height="515"
            src="https://www.youtube.com/embed/6AJHbI8MqqU?si=wJE_fwpW6Q_0I7lj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
}
