import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";

export default function News() {
  return (
    <main>
      {/* NAV MENU */}
      <Nav />
      {/* NEWS */}
      <section className="news">
        <div className="max-w-screen-lg">
          <h1>NEWS</h1>
        </div>
      </section>
      <Footer />
    </main>
  );
}
