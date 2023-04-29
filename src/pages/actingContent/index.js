import ActingTrend from "../../components/ActingTrend.js";
import ModalWinner from "../../components/ModalWinner.js";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function actingContent() {
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
      <ModalWinner />
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
                  <a href="../gallery/">Gallery</a>
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
        className={`flex min-h-screen flex-col items-center justify-between p-24 scroll-smooth py-40 ${inter.className}`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl md:text-4xl text-slate-50 mb-3 font-semibold">
                Vote for your favorite
              </h3>
              <p className="text-base text-slate-50 mb-12">
                Cast your vote for the actor who has captured your heart and
                imagination with their outstanding performances!
              </p>
            </div>
            <span className="text-slate-50 text-xl font-semibold">Duration: 16H:01s</span>
          </div>
          <ActingTrend />
        </div>
      </main>
    </>
  );
}
