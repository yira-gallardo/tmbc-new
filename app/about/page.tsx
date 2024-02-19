"use client";
import Divider from "@/components/UI/Divider/Divider";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Animation from "@/components/UI/Animation/Animation";
import Image from "next/image";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024, // Width up to 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Width up to 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <main>
      <Nav />
      <section>
        <div className="mx-auto">
          <div className="w-full">
            <Image
              src="/img/pic_about.jpg"
              alt="TMBC"
              width={1522}
              height={340}
              className="w-full h-96 object-cover object-center"
            />
          </div>
          <div className="container mx-auto relative bg-white">
            <div className="max-w-screen-lg mx-auto">
              <div className="-mt-20 py-20">
                <Animation
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Divider />

                  <h2 className="text-4xl font-bold text-slate-900 mb-8">
                    ABOUT
                  </h2>
                  <h3 className="text-lg text-zinc-500">¿Quiénes somos?</h3>
                  <h3 className="text-lg text-zinc-500">
                    TMBC es una agencia fundada en 2022 liderada por
                    personalidades que se han especializado por más de 15 años
                    en la industria del entretenimiento. Entre nuestros
                    principales servicios se encuentran el management y el
                    booking, así como la comercialización de nuestros artistas
                    con marcas. <br></br>En poco tiempo, TMBC ha logrado
                    posicionar a sus artistas en un alto nivel al hacerlos parte
                    de los eventos más reconocidos en habla hispana y alrededor
                    del mundo.<br></br> El brazo de la compañía se extiende para
                    trabajar de manera continua con talentos internacionales. A
                    corto plazo TMBC tiene el proyecto de expandir sus oficinas
                    en EU y Latinoamérica.
                  </h3>
                </Animation>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
