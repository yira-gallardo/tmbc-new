import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
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
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/artist">Artist</Link>
              </li>
              <li>
                <Link href="/shows">Shows</Link>
              </li>
              <li>
                <Link href="/news">News/Press</Link>
              </li>
              <li>
                <Link href="/music">Music</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
