"use client";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";

export default function Contacto() {
  return (
    <main>
      <Nav />
      <section className="py-20 px-8 md:px-0">
        <div className="mx-auto">
          <div className="container mx-auto relative ">
            <div className="max-w-screen-lg mx-auto">
              <div className="-mt-20 py-20">
                <Animation
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                ></Animation>
              </div>
            </div>
          </div>
          <div className=" bg-white">
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
                      <button className="w-full p-4 text-white font-black bg-black">
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
