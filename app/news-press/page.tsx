import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";

export default function NewsPress() {
  return (
    <main>
      <Nav />
      <Animation
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="container max-w-screen-xl mx-auto py-40">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">News / Press</h2>
          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-10 items-center">
            <div className="col-span-1">
              <Link href="/news-press/1">
                <Image
                  src="/img/danna01.jpg"
                  alt="News 1"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mt-5 text-slate-900">
                <Link href="/news-press/1">News 1</Link>
              </h3>
              {/* date */}
              <p className="text-sm mt-3">10 de septiembre de 2021</p>
              <p className="text-sm mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/" className="font-bold my-4 block">
                Ver más
              </Link>
            </div>
          </div>
        </section>
      </Animation>
      <Footer />
    </main>
  );
}
