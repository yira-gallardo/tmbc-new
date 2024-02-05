"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <nav className="py-8">
        <div className="container mx-auto max-w-screen-xl">
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
              <ul className="flex gap-10 font-bold uppercase">
                <li>
                  <Link href="/" className="link-tmbc">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={classnames("link-tmbc", {
                      "text-tmbc": pathname === "/about",
                    })}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/artistas"
                    className={classnames("link-tmbc", {
                      "text-tmbc": pathname === "/artistas",
                    })}
                  >
                    Artistas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shows"
                    className={classnames("link-tmbc", {
                      "text-tmbc": pathname === "/shows",
                    })}
                  >
                    Shows
                  </Link>
                </li>
                <li>
                  <Link
                    href="/musica"
                    className={classnames("link-tmbc", {
                      "text-tmbc": pathname === "/musica",
                    })}
                  >
                    Música
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}