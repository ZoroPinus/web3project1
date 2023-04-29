import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import thumbnail1 from "../../../public/images/thumbnail1.jpg";
import ActingTrend from "../../components/ActingTrend.js";

const inter = Inter({ subsets: ["latin"] });

export default function actingPage() {
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
        className={`flex min-h-screen flex-col items-center justify-between p-24 scroll-smooth ${inter.className}`}
      >
        <div className="text-2xl md:text-4xl text-slate-50 mb-8 font-semibold">Acting Category</div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-indigo-950 p-3 rounded-md">
            <div className="grid grid-cols-[minmax(0px,0.8fr)_1fr] gap-5">
              <Image src={thumbnail1} className="rounded-md" />
              <div className="flex flex-col px-3">
                <h3 className="text-xl font-semibold mb-1 text-slate-50">
                  Method Clash
                </h3>
                <span className="text-sm font-semibold text-neutral-400 mb-3">Posted by Nicco - Director</span>
                <p className="text-base text-slate-50 mb-4">
                  A competition that challenges participants to showcase their versatility and master of different acting techniques..
                </p>
                <a
                  href="../actingContent"
                  className="text-base font-medium hover:underline underline-offset-4 text-indigo-400"
                >
                  Browse &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className="bg-indigo-950 p-3 rounded-md">
            <div className="grid grid-cols-[minmax(0px,0.8fr)_1fr] gap-5">
              <Image src={thumbnail1} className="rounded-md" />
              <div className="flex flex-col px-3">
                <h3 className="text-xl font-semibold mb-3 text-slate-50">
                  Acting out
                </h3>
                <span className="text-sm font-semibold text-neutral-400 mb-3">Posted by Nicco - Director</span>
                <p className="text-base text-slate-50 mb-4">
                  A showcase for actors to perform their favorite monologues and scenes from movies and plays.
                </p>
                <a
                  href="../actingContent"
                  className="text-base font-medium hover:underline underline-offset-4 text-indigo-400"
                >
                  Browse &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className="bg-indigo-950 p-3 rounded-md">
            <div className="grid grid-cols-[minmax(0px,0.8fr)_1fr] gap-5">
              <Image src={thumbnail1} className="rounded-md"/>
              <div className="flex flex-col px-3">
                <h3 className="text-xl font-semibold mb-3 text-slate-50">Rising Star</h3>
                <span className="text-sm font-semibold text-neutral-400 mb-3">Posted by Nicco - Director</span>
                <p className="text-base text-slate-50 mb-4">
                  A competition for undiscovered actors seeking to make it big in the industry.
                </p>
                <a
                  href="../actingContent"
                  className="text-base font-medium hover:underline underline-offset-4 text-indigo-400"
                >
                  Browse &#8594;
                </a>
              </div>
            </div>
          </div>
          <div className="bg-indigo-950 p-3 rounded-md">
            <div className="grid grid-cols-[minmax(0px,0.8fr)_1fr] gap-5">
              <Image src={thumbnail1} className="rounded-md"/>
              <div className="flex flex-col px-3">
                <h3 className="text-xl font-semibold mb-3 text-slate-50">Acting Event Title</h3>
                <span className="text-sm font-semibold text-neutral-400 mb-3">Posted by Nicco - Director</span>
                <p className="text-base text-slate-50 mb-4">
                  Adipisci officia, velit esse ab in totam dolores dolorem
                  debitis, aliquam illo nihil vero laboriosam.
                </p>
                <a
                  href="#"
                  className="text-base font-medium hover:underline underline-offset-4 text-indigo-400"
                >
                  Browse &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
