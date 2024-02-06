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
      {/* NEWS */}
      <section className="container mx-auto pt-10">
        <div className="max-w-screen-xl mx-auto py-20">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">News & Press</h2>
          <div className="my-20">
            <Link
              href="https://www.excelsior.com.mx/funcion/danna-paola-cantara-himno-nacional-en-pelea-de-canelo-alvarez-contra-jermell-charlo/1608194"
              target="_blank"
              className="grid grid-cols-2 items-center hover:bg-zinc-100"
            >
              <div className="w-full h-[400px] relative">
                <Image
                  src="/img/danna-paola.jpg"
                  alt="Press 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-10">
                <h4 className="text-3xl font-bold uppercase">Danna Paola</h4>
                <p>
                  Danna Paola cantaría el Himno Nacional en la pelea de 'Canelo'
                  Álvarez contra Jermell Charlo
                </p>
                <button className="font-bold my-4 hover:underline">
                  Ver más
                </button>
              </div>
            </Link>
            <Link
              href="https://mx.hola.com/famosos/2023073048451/danna-paola-steve-aoki-paris-hilton-tomorrowland-presentacion/"
              className="grid grid-cols-2 items-center hover:bg-zinc-100"
            >
              <div className="p-10">
                <h4 className="text-3xl font-bold uppercase">Danna Paola</h4>
                <p>Danna Paola y su exitoso debut en el Tomorrowland</p>
                <button className="font-bold my-4 hover:underline">
                  Ver más
                </button>
              </div>
              <div className="w-full h-[400px] relative">
                <Image
                  src="/img/danna-paola.jpg"
                  alt="Press 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </div>
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
                  src="/img/danna-st.jpg"
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
                  PARANOIA
                </h4>
                <h3 className="text-2xl font-bold text-white uppercase">
                  DANNA PAOLA / STEVE AOKI
                </h3>
                <Divider color="white" />
                <Link
                  href="https://www.youtube.com/watch?v=_c7kKUWO4wU"
                  target="_blank"
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
          <h2 className="text-2xl font-bold uppercase">ARTISTS</h2>
          <div className="grid grid-cols-2 py-10 items-center">
            <div className="relative">
              <Link href="/">
                <div className="w-full h-[400px] relative">
                  <Image
                    src="/img/danna.jpg"
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
                    <h2 className="text-2xl font-bold uppercase">Alex Hoyer</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative">
              <Link href="/">
                <div className="w-full h-[400px] relative">
                  <Image
                    src="/img/allison.jpg"
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
                    src="/img/mariobautista.jpg"
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
                    src="/img/finde.jpg"
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
      <Footer />
    </main>
  );
}
