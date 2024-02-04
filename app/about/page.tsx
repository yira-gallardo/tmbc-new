import Divider from "@/components/Layout/Footer/UI/Divider/Divider";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* NAV MENU */}
      <Nav />
      {/* HERO */}
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
            {/* ESTA SIGUIENTE LINEA ES LA QUE SE REUTILIZA ADENTRO DE LOS DIVS PARA CONTENER */}
            <div className="max-w-screen-xl mx-auto">
              <div className="-mt-20 p-20">
                <Divider />
                <h2 className="text-4xl font-black text-tmbc mb-8">ABOUT</h2>
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
              <div className="bg-red -mt-20 p-24 text-slate-100 ">
                <div className="w-[30px] h-[15px] bg-slate-50 my-16" />
                <h1 className="font-bold text-4xl">Location</h1>
                <h3 className="pt-6">MONTERREY</h3>
                <div className="w-[60px] h-[2px] bg-slate-50 my-5"> </div>
                <h3 className="">MERIDA</h3>
                <div className="w-[60px] h-[2px] bg-slate-50 my-5"> </div>
                <h3 className="">GUADALAJARA</h3>
                <div className="w-[60px] h-[2px] bg-slate-50 my-5"> </div>
                <h3 className="mb-16">CIUDAD DE MÉXICO</h3>
              </div>
            </div>
          </div>
          <div className="container mx-auto relative bg-white">
            {/* ESTA SIGUIENTE LINEA ES LA QUE SE REUTILIZA ADENTRO DE LOS DIVS PARA CONTENER */}
            <div className="max-w-screen-xl mx-auto">
              <div className="-mt-20 p-20">
                <Divider />
                <h2 className="text-4xl font-black text-tmbc mb-8">
                  CONTACT US
                </h2>
                <p className="text-lg text-zinc-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
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
                    <button className="w-full p-4 text-white font-black bg-red-600">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          ;{/* CONTACT FORM */}
          <div className="bg-tmbc">
            <div className="max-w-screen-xl mx-auto">
              <div className="bg-red -mt-20 p-24 text-slate-100 ">
                <div className="w-[30px] h-[15px] bg-slate-50 my-16" />
                <h1 className="font-bold text-4xl"> OUR PARTNERS:</h1>
                <div className="columns-4">
                  <div className="column">
                    <Image
                      src="/img/ae.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/calvin.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/caribecooler.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/cyzone.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                </div>
                <div className="columns-4">
                  <div className="column">
                    <Image
                      src="/img/donramon.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/levis.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/mac.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/mercadolibre.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                </div>
                <div className="columns-4">
                  <div className="column">
                    <Image
                      src="/img/omoda.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/shein.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>

                  <div className="column">
                    <Image
                      src="/img/stf.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
                  <div className="column">
                    <Image
                      src="/img/puma.png"
                      alt="TMBC"
                      width={1522}
                      height={340}
                    />
                  </div>
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
