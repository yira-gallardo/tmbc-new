import Divider from "@/components/Layout/Footer/UI/Divider/Divider";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      {/* NAV MENU */}
      <nav className="py-8">
        <div className="container mx-auto max-w-screen-lg">
          <div className="flex items-center justify-between">
            <div className="logo flex items-center justify-center">
              <Link href="/" className="w-48">
                <Image
                  src="/img/logo.webp"
                  alt="TMBC"
                  width={1422}
                  height={340}
                />
              </Link>
            </div>
            <div className="nav-menu flex items-center justify-center">
              <ul className="flex text-zinc-500 gap-10 font-bold">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Artist</Link>
                </li>
                <li>
                  <Link href="/">Shows</Link>
                </li>
                <li>
                  <Link href="/">News/Press</Link>
                </li>
                <li>
                  <Link href="/">Music</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
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
          <div className="container mx-auto max-w-screen-lg relative">
            <div className="bg-white -mt-20 p-10">
              <div className="w-[30px] h-[15px] bg-red-600  my-5 "> </div>
              <h1 className="text-4xl font-bold text-zinc-500">CONTACT US</h1>
              <p className="text-lg text-zinc-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.<br></br>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the <br></br>release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque et quasi
                architecto beatae vitae dicta <br></br>sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet,
              </p>
            </div>
          </div>
          {/* CONTACT FORM */}
          <section className="py-20 bg-tmbc">
            <div className="container mx-auto relative">
              <div className="max-w-screen-lg mx-auto">
                <div className="w-[30px] h-[10px] bg-slate-50 my-4" />
                <h2 className="text-4xl font-black text-white">CONTACTO</h2>
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
                    <button className="w-full p-4 bg-white text-black font-black">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <div className="container mx-auto max-w-screen-lg relative">
            <div className=" bg-slate-300 -mt-20 p-10">
              <h1 className="text-red-600 font-bold text-xl">OUR PARTNERS:</h1>
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
      </section>
    </main>
  );
}
