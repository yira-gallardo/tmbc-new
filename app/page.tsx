"use client";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/UI/Animation/Animation";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
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
    <main className="overflow-hidden">
      <Nav />
      <section className="container mx-auto p-8 md:p-0 md:pt-10 ">
        <div className="max-w-screen-lg mx-auto py-20">
          <Animation
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video controls>
              <source src="/img/tmbc-video.mp4" type="video/mp4" />
            </video>
          </Animation>
        </div>
      </section>
      <section className="container mx-auto pt-10">
        <div className="max-w-screen-xl mx-auto py-20 px-8 ">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">News & Press</h2>
          <div className="my-20 ">
            <Animation
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://www.excelsior.com.mx/funcion/danna-paola-cantara-himno-nacional-en-pelea-de-canelo-alvarez-contra-jermell-charlo/1608194"
                target="_blank"
                className="grid grid-cols-1 sm:grid-cols-2 items-center hover:bg-zinc-100"
              >
                <div className="w-full h-[400px] relative ">
                  <Image
                    src="/img/artists/danna-paola.jpg"
                    alt="Press 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 sm:p-10">
                  <h4 className="text-xl sm:text-3xl font-bold uppercase">
                    Danna Paola
                  </h4>
                  <p>
                    Danna Paola cantaría el Himno Nacional en la pelea de Canelo
                    Álvarez contra Jermell Charlo
                  </p>
                  <button className="font-bold my-4 hover:underline">
                    Ver más
                  </button>
                </div>
              </Link>
            </Animation>
            <Animation
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://mx.hola.com/famosos/2023073048451/danna-paola-steve-aoki-paris-hilton-tomorrowland-presentacion/"
                className="grid grid-cols-1 sm:grid-cols-2 items-center hover:bg-zinc-100"
              >
                <div className="w-full h-[400px] relative md:hidden">
                  <Image
                    src="/img/artists/danna-paola.jpg"
                    alt="Press 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 sm:p-10">
                  <h4 className="text-xl sm:text-3xl font-bold uppercase">
                    Danna Paola
                  </h4>
                  <p>Danna Paola y su exitoso debut en el Tomorrowland</p>
                  <button className="font-bold my-4 hover:underline">
                    Ver más
                  </button>
                </div>
                <div className="w-full h-[400px] relative hidden md:block">
                  <Image
                    src="/img/artists/danna-paola.jpg"
                    alt="Press 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            </Animation>
          </div>
        </div>
      </section>
      <section className="bg-neutral-900">
        <div className="container mx-auto max-w-screen-xl py-20 px-4 sm:px-6 lg:px-8">
          <Divider color="white" />
          <h2 className="text-2xl font-bold text-white uppercase">
            Últimos Lanzamientos
          </h2>
          <div className="flex flex-col sm:flex-row py-10 items-center sm:gap-20">
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
              <Animation
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <Image
                    src="/img/artists/danna-paola.jpg"
                    alt="Last Release 1"
                    width={800}
                    height={800}
                  />
                </div>
              </Animation>
            </div>
            <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
              <Animation
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center sm:items-start">
                  <h4
                    className=" 
                    text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase text-center sm:text-left"
                  >
                    PARANOIA
                  </h4>
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mt-2">
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
              </Animation>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="max-w-screen-xl mx-auto py-20 px-4">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">ARTISTS</h2>
          <section className="container mx-auto">
            <div className="max-w-screen-xl mx-auto py-20">
              <div className="grid grid-cols-2  py-10 items-center">
                <div className="relative col-span-2 md:col-span-1">
                  <Animation
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="text-white bg-opacity-50 imagen-escondida"
                      style={{
                        backgroundImage: "url(/img/artists/danna-paola.jpg)",
                      }}
                    >
                      <div className="absolute bottom-0 left-0 p-4">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase">
                          Danna Paola
                        </h2>
                        <div className="flex gap-4 tmbc-socials">
                          <Link href="https://instagram.com/dannapaola?igshid=MWZoY3Zmc3Y4ZTV1Mw==">
                            <div className="artist-social">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                width="20px"
                                height="20px"
                              >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                              </svg>
                            </div>
                          </Link>
                          <Link href="https://x.com/dannapaola?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ">
                            <div className="artist-social">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-twitter-x"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                              </svg>
                            </div>
                          </Link>
                          <Link href="https://www.tiktok.com/@dannapaola?_t=8hFZOnaudAT&_r=1">
                            <div className="artist-social">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-tiktok"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                              </svg>
                            </div>
                          </Link>
                          <Link href="https://www.facebook.com/DannaPaola?mibextid=LQQJ4d">
                            <div className="artist-social">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                              </svg>
                            </div>
                          </Link>
                          <Link href="https://open.spotify.com/artist/5xSx2FM8mQnrfgM1QsHniB?si=Samda2CYRUeDpQV9NYsCmw">
                            <div className="artist-social">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-spotify"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                              </svg>
                            </div>
                          </Link>
                          <Link href="https://music.apple.com/mx/artist/danna-paola/23148284">
                            <div className="artist-social">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-music-note-beamed"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                                <path
                                  fill-rule="evenodd"
                                  d="M14 11V2h1v9zM6 3v10H5V3z"
                                />
                                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[400px] relative">
                      <Image
                        src="/img/artists/danna-paola.jpg"
                        alt="Danna Paola"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center top"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100"></div>
                  </Animation>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <Animation
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/">
                      <div
                        className="text-white bg-opacity-50 imagen-escondida-derecha"
                        style={{
                          backgroundImage:
                            "url(/img/artists/mariobautista.jpg)",
                        }}
                      >
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-2xl font-bold uppercase">
                            Mario Bautista
                          </h2>
                          <div className="flex gap-4 tmbc-socials">
                            <Link href=" https://instagram.com/mariobautista?igshid=MTF2anhnMnkzamJuZg==">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  width="20px"
                                  height="20px"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://x.com/mariobautista_?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://www.tiktok.com/@mariobautistagil?_t=8hFZKW9zRIL&_r=1">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-tiktok"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://www.facebook.com/MarioBautistaa?mibextid=LQQJ4d">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-facebook"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://open.spotify.com/artist/0AspLZGQkP38yddNoD0pLn?si=Fr9YUOVzS-eLGLVJLu2g5w">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-spotify"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://music.apple.com/mx/artist/mario-bautista/940961039">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-music-note-beamed"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M14 11V2h1v9zM6 3v10H5V3z"
                                  />
                                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[400px] relative">
                        <Image
                          src="/img/artists/danna-paola.jpg"
                          alt="Danna Paola"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center top"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100"></div>
                    </Link>
                  </Animation>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <Animation
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/">
                      <div
                        className="text-white bg-opacity-50 imagen-escondida"
                        style={{
                          backgroundImage: "url(/img/artists/allison.jpg)",
                        }}
                      >
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-2xl font-bold uppercase">
                            Allison
                          </h2>
                          <div className="flex gap-4 tmbc-socials">
                            <Link href="https://instagram.com/allisonband?igshid=MXhleGkycTc4dW5mOA==">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  width="20px"
                                  height="20px"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://x.com/allisonband?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://www.tiktok.com/@allisonband?_t=8hFZQnkA8lK&_r=1">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-tiktok"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href=" https://www.facebook.com/Allisonoficial?mibextid=LQQJ4d">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-facebook"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://open.spotify.com/artist/4AP5EFbVVcBv8cfyqO0oqr?si=kuFdnNY1TbWh4PIsFHlAqg">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-spotify"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://music.apple.com/mx/artist/allison/1094679133">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-music-note-beamed"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M14 11V2h1v9zM6 3v10H5V3z"
                                  />
                                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[400px] relative">
                        <Image
                          src="/img/artists/danna-paola.jpg"
                          alt="Danna Paola"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center top"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100"></div>
                    </Link>
                  </Animation>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <Animation
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/">
                      <div
                        className="text-white bg-opacity-50 imagen-escondida-derecha"
                        style={{
                          backgroundImage: "url(/img/artists/alex-hoyer.jpg)",
                        }}
                      >
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-2xl font-bold uppercase">
                            Alex hoyer
                          </h2>
                          <div className="flex gap-4 tmbc-socials">
                            <Link href="https://instagram.com/alexhoyer_?igshid=MXFsamNvMG1sMGlwZw==">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  width="20px"
                                  height="20px"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://x.com/hoyerofficial?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://www.tiktok.com/@alexhoyer?_t=8hFZS7rw9W1&_r=1">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-tiktok"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://www.facebook.com/OfficialHoyer?mibextid=LQQJ4d">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-facebook"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://open.spotify.com/artist/45ztMs8dTg6GRQ41yY4xtr?si=k_uD0-wWS9CDuP2ERqFDkQ">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-spotify"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                                </svg>
                              </div>
                            </Link>
                            <Link href=" https://music.apple.com/mx/artist/alex-hoyer/1114657873">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-music-note-beamed"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M14 11V2h1v9zM6 3v10H5V3z"
                                  />
                                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[400px] relative">
                        <Image
                          src="/img/artists/danna-paola.jpg"
                          alt="Danna Paola"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center top"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100"></div>
                    </Link>
                  </Animation>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                  <Animation
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Link href="/">
                      <div
                        className="text-white bg-opacity-50 imagen-escondida"
                        style={{
                          backgroundImage: "url(/img/artists/finde.jpg)",
                        }}
                      >
                        <div className="absolute bottom-0 left-0 p-4">
                          <h2 className="text-2xl font-bold uppercase">
                            Finde
                          </h2>
                          <div className="flex gap-4 tmbc-socials">
                            <Link href="https://instagram.com/findeband?igshid=MzVvYmxzZnV4djQ2">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  width="20px"
                                  height="20px"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://x.com/findeband?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-twitter-x"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://www.facebook.com/findeband?mibextid=LQQJ4d">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-facebook"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://open.spotify.com/artist/1F9nkzoHCrTN7e1tuJUXDC?si=no6FZoGtSTadb3UBGAG1MQ">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-spotify"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                                </svg>
                              </div>
                            </Link>
                            <Link href="https://music.apple.com/mx/artist/finde/257292260">
                              <div className="artist-social">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-music-note-beamed"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M14 11V2h1v9zM6 3v10H5V3z"
                                  />
                                  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z" />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[400px] relative">
                        <Image
                          src="/img/artists/danna-paola.jpg"
                          alt="Danna Paola"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center top"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-4 opacity-0 hover:opacity-100"></div>
                    </Link>
                  </Animation>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="container max-w-screen-xl mx-auto py-40">
        <Divider />
        <h2 className="text-2xl font-bold uppercase">TMBC SPORTS</h2>
        <h3 className="text-center text-xl">PRÓXIMAMENTE</h3>
      </section>
      <div className="bg-neutral-900">
        <div className="max-w-screen-lg mx-auto">
          <Animation
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-red -mt-20 py-40 text-slate-100">
              <Divider color="white" />
              <h3 className="font-bold text-4xl text-white mb-4">
                OUR PARTNERS
              </h3>
              <div>
                <Slider {...settings}>
                  <div className="">
                    <Image
                      src="/img/partners/ae.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/calvin.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/caribecooler.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/cyzone.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/donramon.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/levis.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/mac.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/mercadolibre.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/omoda.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/shein.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="">
                    <Image
                      src="/img/partners/stf.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src="/img/partners/puma.png"
                      alt="TMBC"
                      width={180}
                      height={150}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </Animation>
        </div>
      </div>
      <Footer />
    </main>
  );
}
