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
                  <p className="text-lg text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Animation>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900">
            <div className="max-w-screen-lg mx-auto">
              <Animation
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-red -mt-20 pt-36 pb-32 text-slate-100 ">
                  <Divider color="white" />
                  <h3 className="font-bold text-4xl">LOCATION</h3>
                  <h4 className="text-2xl pt-6">MONTERREY</h4>
                  <div className="w-[60px] h-[2px] bg-slate-50 my-2" />
                  <h4 className="text-2xl pt-6">MERIDA</h4>
                  <div className="w-[60px] h-[2px] bg-slate-50 my-2" />
                  <h4 className="text-2xl pt-6">GUADALAJARA</h4>
                  <div className="w-[60px] h-[2px] bg-slate-50 my-2" />
                  <h4 className="text-2xl pt-6">CIUDAD DE MÉXICO</h4>
                  <div className="w-[60px] h-[2px] bg-slate-50 my-2" />
                </div>
              </Animation>
            </div>
          </div>
          <div className="container mx-auto relative bg-white">
            <div className="max-w-screen-lg mx-auto">
              <Animation
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="-mt-20 py-20">
                  <Divider />
                  <h3 className="font-bold text-4xl text-slate-900 mb-4">
                    CONTACT US
                  </h3>
                  <p className="text-lg text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="my-20">
                    <form>
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-4 font-bold border-2 border-slate-900 border-b-0"
                      />
                      <textarea
                        className="w-full p-4 mb-4 font-bold border-2 border-slate-900 h-80"
                        placeholder="Tu mensaje"
                      />
                      <button className="w-full p-4 text-white font-black bg-neutral-900">
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
