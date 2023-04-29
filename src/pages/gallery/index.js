import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from "react";
import Link from "next/link";
import Tabs from "../../components/Tabs.js";

export default function Gallery() {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <>
      <header
        className={`w-full px-10 fixed top-0 z-40 scroll-smooth ${
          animateHeader && " bg-[#1a1a56]"
        }`}
      >
        <nav className="py-5 px-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="blinc-logo uppercase font-bold text-4xl text-slate-50 mr-16">
                BLINC
              </div>
              <ul className="nav-links flex gap-6">
                <li className="text-md sm:text-base text-slate-50 hover:text-indigo-500">
                  <a href="../">Home</a>
                </li>
                <li className="text-md sm:text-base text-slate-50 hover:text-indigo-500">
                  <a href="gallery/">Gallery</a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="flex justify-center items-center px-4 py-3 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-slate-50 font-semibold text-md sm:text-base"
            >
              <span>Connect wallet</span>
            </a>
          </div>
        </nav>
      </header>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} scroll-smooth`}
      >
        <div className="container mx-auto pt-40 pb-32" id="gallery">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="md:text-6xl text-4xl font-bold text-indigo-500 mb-4">
                Make a vote for your favorite creator!
              </h2>
              <p className="text-base sm:text-lg md:text-2xl font-medium text-slate-50 mx-auto ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci officia, velit esse ab in.
              </p>
            </div>
          </div>
        </div>

        <div className="trending-content py-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-4xl text-slate-50  font-semibold">
              Top Contents
            </h3>
            <a
              href="#"
              className="inline-block p-2 border border-indigo-500 rounded-md hover:border-slate-50 fill-indigo-400 hover:fill-slate-50"
            >
              <span>
                <svg
                  className=" h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z" />
                </svg>
              </span>
            </a>
          </div>
          <Tabs />
        </div>
      </main>
    </>
  );
}
