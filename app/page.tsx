import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="container mx-auto pt-10">
        <div className="max-w-screen-xl mx-auto py-20">
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/6AJHbI8MqqU?si=wJE_fwpW6Q_0I7lj"
            title="YouTube video player"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </section>
      <section className="bg-tmbc">
        <div className="container mx-auto max-w-screen-xl py-20">
          <Divider color="white" />
          <h2 className="text-2xl font-bold text-white uppercase">
            Últimos Lanzamientos
          </h2>
          <div className="flex py-10 items-center gap-20">
            <div className="w-1/2">
              <div>
                <Image
                  src="/img/danna-cover.jpg"
                  alt="Last Release 1"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col">
                <h4
                  className=" 
                text-5xl font-bold text-white uppercase"
                >
                  AÚN TE QUIERO
                </h4>
                <h3 className="text-2xl font-bold text-white uppercase">
                  DANNA PAOLA
                </h3>
                <Divider color="white" />
                <Link
                  href="/danna-paola"
                  className="font-bold text-white uppercase"
                >
                  Escuchar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="max-w-screen-xl mx-auto py-20">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">Artistas</h2>
          <div className="flex py-10 items-center">
            <div className="w-1/4 relative">
              <Link href="/">
                <div className="w-full h-[700px] relative">
                  <Image
                    src="/img/danna-paola.jpg"
                    alt="Danna Paola"
                    layout="fill"
                    objectFit="cover"
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
            <div className="w-1/4 relative">
              <Link href="/">
                <div className="w-full h-[700px] relative">
                  <Image
                    src="/img/alex-hoyer.jpg"
                    alt="Alex Hoyer"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-2xl font-bold uppercase">Alex Hoyer</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-1/4 relative">
              <Link href="/">
                <div className="w-full h-[700px] relative">
                  <Image
                    src="/img/danna-paola.jpg"
                    alt="Danna Paola"
                    layout="fill"
                    objectFit="cover"
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
            <div className="w-1/4 relative">
              <Link href="/">
                <div className="w-full h-[700px] relative">
                  <Image
                    src="/img/alex-hoyer.jpg"
                    alt="Alex Hoyer"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100">
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="text-2xl font-bold uppercase">Alex Hoyer</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
