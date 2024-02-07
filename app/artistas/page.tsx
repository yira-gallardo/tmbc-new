import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";

export default function Artist() {
  return (
    <main>
      <Nav />

      <section className="container max-w-screen-xl mx-auto py-40">
        <Divider />
        <h2 className="text-2xl font-bold uppercase">ARTISTS</h2>
        <section className="container mx-auto">
          <div className="max-w-screen-xl mx-auto py-20">
            <div className="grid grid-cols-2 py-10 items-center">
              <div className="relative">
                <Link href="/">
                  <div className="w-full h-[400px] relative">
                    <Image
                      src="/img/artists/danna.jpg"
                      alt="Danna Paola"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="text-2xl font-bold uppercase">
                        Danna Paola
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <Link href="/">
                  <div className="w-full h-[400px] relative">
                    <Image
                      src="/img/alexhoyer.png"
                      alt="Alex Hoyer"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center top"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="text-2xl font-bold uppercase">
                        Alex Hoyer
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <Link href="/">
                  <div className="w-full h-[400px] relative">
                    <Image
                      src="/img/artists/allison.jpg"
                      alt="Allison"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="text-2xl font-bold uppercase">Allison</h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <Link href="/">
                  <div className="w-full h-[400px] relative">
                    <Image
                      src="/img/artists/mariobautista.jpg"
                      alt="Mario Bautista"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="text-2xl font-bold uppercase">
                        Mario Bautista
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative">
                <Link href="/">
                  <div className="w-full h-[400px] relative">
                    <Image
                      src="/img/artists/finde.jpg"
                      alt="Finde"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="text-2xl font-bold uppercase">Finde</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
