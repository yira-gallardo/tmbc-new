"use client";
import Divider from "@/components/UI/Divider/Divider";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
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
            <div className="max-w-screen-xl mx-auto">
              <div className="-mt-20 py-20">
                <Divider />
                <h2 className="text-4xl font-bold text-tmbc mb-8">ABOUT</h2>
                <p className="text-lg text-zinc-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.<br></br>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the <br></br>release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  et quasi architecto beatae vitae dicta <br></br>sunt
                  explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tmbc">
            <div className="max-w-screen-xl mx-auto">
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
            </div>
          </div>
          <div className="container mx-auto relative bg-white">
            <div className="max-w-screen-xl mx-auto">
              <div className="-mt-20 py-20">
                <Divider />
                <h3 className="font-bold text-4xl text-tmbc mb-4">
                  CONTACT US
                </h3>
                <p className="text-lg text-zinc-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="my-20">
                  <form>
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-full p-4 font-bold border-2 border-red-600 border-b-0"
                    />
                    <textarea
                      className="w-full p-4 mb-4 font-bold border-2 border-red-600 h-80"
                      placeholder="Tu mensaje"
                    />
                    <button className="w-full p-4 text-white font-black bg-tmbc">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-tmbc">
            <div className="max-w-screen-xl mx-auto">
              <div className="bg-red -mt-20 py-40 text-slate-100">
                <Divider color="white" />
                <h3 className="font-bold text-4xl text-white mb-4">
                  OUR PARTNERS
                </h3>
                <div>
                  <Slider {...settings}>
                    <div className="">
                      <Image
                        src="/img/ae.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/calvin.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/caribecooler.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/cyzone.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/donramon.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/levis.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/mac.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/mercadolibre.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/omoda.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/shein.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/img/stf.png"
                        alt="TMBC"
                        width={1522}
                        height={340}
                      />
                    </div>
                    <div className=" flex justify-center items-center">
                      <Image
                        src="/img/puma.png"
                        alt="TMBC"
                        width={180}
                        height={150}
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
