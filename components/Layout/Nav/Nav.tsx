"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white hidden md:block">
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
                    <Link
                      href="/about"
                      className={classnames("link-tmbc", {
                        "text-slate-600": pathname === "/about",
                      })}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/music-and-management"
                      className={classnames("link-tmbc", {
                        "text-slate-600": pathname === "/music-and-management",
                      })}
                    >
                      MUSIC
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shows"
                      className={classnames("link-tmbc", {
                        "text-tmbc": pathname === "/shows",
                      })}
                    >
                      SHOWS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news-press"
                      className={classnames("link-tmbc", {
                        "text-tmbc": pathname === "/news-press",
                      })}
                    >
                      NEWS/PRESS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/artistas"
                      className={classnames("link-tmbc", {
                        "text-tmbc": pathname === "/artistas",
                      })}
                    >
                      ARTISTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tmbc-sport"
                      className={classnames("link-tmbc", {
                        "text-tmbc": pathname === "/tmbc-sport",
                      })}
                    >
                      TMBC SPORTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className={classnames("link-tmbc", {
                        "text-tmbc": pathname === "/contacto",
                      })}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full z-9999 z-50 bg-white text-slate-600 md:hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center justify-center">
            <Link href="/" className="w-20">
              <Image
                src="/img/logo.webp"
                alt="TMBC"
                width={1422}
                height={340}
              />
            </Link>
          </div>
          <div className="burger flex items-center justify-center">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div>
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/music-and-management">MUSIC</Link>
              </li>
              <li>
                <Link href="/shows">SHOWS</Link>
              </li>
              <li>
                <Link href="/news-press">NEWS/PRESS</Link>
              </li>
              <li>
                <Link href="/artistas">ARTISTS</Link>
              </li>
              <li>
                <Link href="/tmbc-sport">TMBC SPORTS</Link>
              </li>
              <li>
                <Link href="/contacto">CONTACT</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
