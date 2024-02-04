import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";

export default function Artist() {
  return (
    <main>
      {/* NAV MENU */}
      <Nav />
      {/* ARTISTS */}
      <Footer />
    </main>
  );
}
