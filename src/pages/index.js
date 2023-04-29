import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import Tabs from "../components/Tabs.js";
import nftImg from "../../public/images/nft-landing.jpg";
import profile1 from "../../public/images/profile_1.jpg";
import profile2 from "../../public/images/profile_2.jpg";
import profile3 from "../../public/images/profile_3.jpg";
import profile4 from "../../public/images/profile_4.jpg";
import profile5 from "../../public/images/profile_5.jpg";
import thumbnail1 from "../../public/images/thumbnail1.jpg";

import pbb from "../../public/images/pbb.png";
import agt from "../../public/images/agt.jpg";
import voicePh from "../../public/images/voice-ph.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
                  <a href="#hero">Home</a>
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
        className={`flex min-h-screen flex-col items-center justify-between p-24 scroll-smooth ${inter.className}`}
      >
        <div className="container mx-auto py-32" id="hero">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <h2 className="md:text-5xl text-4xl font-bold text-indigo-500 mb-7">
                #1 Blockchain Entertainment Platform in the Philippines
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-50 mb-5">
                Revolutionize the way you vote for your favorite artists and performers - our digital platform ensures transparency, accuracy, and inclusivity.
              </p>
              <a
                href="#"
                className="inline-flex cursor-pointer justify-center items-center px-4 py-3 rounded-lg border border-indigo-700 hover:bg-indigo-800 text-slate-50 font-semibold text-md sm:text-base"
              >
                <span>Connect wallet</span>
              </a>
            </div>
            <div className="flex justify-center items-center">
              <Image src={nftImg} alt="" className="w-[80%] rounded-2xl" />
            </div>
          </div>
        </div>

        <div className="top-creators py-20">
          <h3 className="text-2xl md:text-4xl text-slate-50 mb-8 font-semibold">
            Top Participants
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 relative after:absolute after:flex after:justify-center after:items-center after:top-0 after:left-0">
            <div className="flex flex-col justify-center items-center w-full py-10 px-6 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile1}
                alt="profile-user-1"
                className="w-[80%] rounded-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full py-10 px-6 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile2}
                alt="profile-user-1"
                className="w-[80%] rounded-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full py-10 px-6 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile3}
                alt="profile-user-1"
                className="w-[80%] rounded-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full py-10 px-6 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile4}
                alt="profile-user-1"
                className="w-[80%] rounded-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
          </div>
        </div>

        <div className="trending-content py-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-4xl text-slate-50  font-semibold">
              Browse event categories
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="relative rounded-md overflow-hidden">
              <div className="grid grid-cols-2 gap-3 p-3 place-items-center">
                <div className="absolute top-0 bottom-0 w-full z-10 bg-neutral-700/30"></div>
                <Image src={profile5} alt="" className="object-cover rounded-md" />
                <Image src={profile5} alt="" className="object-cover rounded-md" />
                <Image
                  src={thumbnail1}
                  alt=""
                  className="object-contain rounded-md col-span-full"
                />
                <div className="w-[80%] rounded-md py-3 mx-auto absolute bottom-8 left-0 right-0 inline-flex flex-col  items-center bg-indigo-900/80 z-20">
                  <div className="flex  w-full justify-between items-center px-5 ">
                    <p className="text-sm font-semibold text-slate-50 mb-1 uppercase">
                      Duration: 18:02s
                    </p>
                    <a
                      href="acting/"
                      className="py-1 px-4 inline-flex justify-center items-center rounded-full border  border-slate-50  hover:bg-slate-50 hover:text-neutral-700 text-slate-50"
                    >
                      <span className="text-base  font-medium ">Take me</span>
                    </a>
                  </div>
                  <h3 className="text-2xl text-slate-50 mr-auto pl-5">
                    Acting
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden">
              <div className="grid grid-cols-2 gap-3 p-3 place-items-center">
                <div className="absolute top-0 bottom-0 w-full z-10 bg-neutral-700/30"></div>
                <Image src={profile5} alt="" className="object-cover rounded-md" />
                <Image src={profile5} alt="" className="object-cover rounded-md" />
                <Image
                  src={thumbnail1}
                  alt=""
                  className="object-contain rounded-md col-span-full"
                />
                <div className="w-[80%] rounded-md py-3 mx-auto absolute bottom-8 left-0 right-0 inline-flex flex-col  items-center bg-indigo-900/80 z-20">
                  <div className="flex  w-full justify-between items-center px-5 ">
                    <p className="text-sm font-semibold text-slate-50 mb-1 uppercase">
                      Duration: 18:02s
                    </p>
                    <a
                      href="acting/"
                      className="py-1 px-4 inline-flex justify-center items-center rounded-full border  border-slate-50  hover:bg-slate-50 hover:text-neutral-700 text-slate-50"
                    >
                      <span className="text-base  font-medium ">Take me</span>
                    </a>
                  </div>
                  <h3 className="text-2xl text-slate-50 mr-auto pl-5">
                    Pageant
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative rounded-md overflow-hidden">
              <div className="grid grid-cols-2 gap-3 p-3 place-items-center">
                <div className="absolute top-0 bottom-0 w-full z-10 bg-neutral-700/30"></div>
                <Image src={profile5} alt="" className="object-cover rounded-md" />
                <Image src={profile5} alt="" className="object-cover rounded-md" />
                <Image
                  src={thumbnail1}
                  alt=""
                  className="object-contain rounded-md col-span-full"
                />
                <div className="w-[80%] rounded-md py-3 mx-auto absolute bottom-8 left-0 right-0 inline-flex flex-col  items-center bg-indigo-900/80 z-20">
                  <div className="flex  w-full justify-between items-center px-5 ">
                    <p className="text-sm font-semibold text-slate-50 mb-1 uppercase">
                      Duration: 18:02s
                    </p>
                    <a
                      href="acting/"
                      className="py-1 px-4 inline-flex justify-center items-center rounded-full border  border-slate-50  hover:bg-slate-50 hover:text-neutral-700 text-slate-50"
                    >
                      <span className="text-base  font-medium ">Take me</span>
                    </a>
                  </div>
                  <h3 className="text-2xl text-slate-50 mr-auto pl-5">
                    Comedy
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-events">
          <div className="container mx-auto">
            <h3 className="text-2xl md:text-4xl text-slate-50  font-semibold mb-8">
              Explore trending Reality TV Shows
            </h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
              <div className="relative rounded-md overflow-hidden ">
                <div className="absolute top-0 bottom-0 h-full w-full flex justify-center items-center text-slate-50 font-semibold text-xl z-10 bg-neutral-900/70">
                  <p className="-translate-y-[30px]">The Voice Philippines</p>
                </div>
                <Image
                  src={voicePh}
                  alt="profile-user-1"
                  className="w-full h-full blur-[2px]"
                />
                <a className="w-[50%] py-3 absolute bottom-6 left-0 right-0 inline-flex justify-center items-center border-2 border-indigo-500 mx-auto rounded-md bg-slate-50/10 hover:bg-indigo-500 cursor-pointer z-20">
                  <span className="text-slate-50">View</span>
                </a>
              </div>
              <div className="relative rounded-md overflow-hidden ">
                <div className="absolute top-0 bottom-0 h-full w-full flex justify-center items-center text-slate-50 font-semibold text-xl z-10 bg-neutral-900/70">
                  <p className="-translate-y-[30px]">America's Got Talent</p>
                </div>
                <Image
                  src={agt}
                  alt="profile-user-1"
                  className="w-full h-full blur-[2px]"
                />
                <a className="w-[50%] py-3 absolute bottom-6 left-0 right-0 inline-flex justify-center items-center border-2 border-indigo-500 mx-auto rounded-md bg-slate-50/10 hover:bg-indigo-500 cursor-pointer z-20">
                  <span className="text-slate-50">View</span>
                </a>
              </div>
              <div className="relative rounded-md overflow-hidden ">
                <div className="absolute top-0 bottom-0 h-full w-full flex justify-center items-center text-slate-50 font-semibold text-xl z-10 bg-neutral-900/70">
                  <p className="-translate-y-[30px]">Pinoy Big Brothers</p>
                </div>
                <Image
                  src={pbb}
                  alt="profile-user-1"
                  className="w-full h-full blur-[2px]"
                />
                <a className="w-[50%] py-3 absolute bottom-6 left-0 right-0 inline-flex justify-center items-center border-2 border-indigo-500 mx-auto rounded-md bg-slate-50/10 hover:bg-indigo-500 cursor-pointer z-20">
                  <span className="text-slate-50">View</span>
                </a>
              </div>
              <div className="relative rounded-md overflow-hidden ">
                <div className="absolute top-0 bottom-0 h-full w-full flex justify-center items-center text-slate-50 font-semibold text-xl z-10 bg-neutral-900/70">
                  <p className="-translate-y-[30px]">Philippines Next Model</p>
                </div>
                <Image
                  src={profile4}
                  alt="profile-user-1"
                  className="w-full h-full blur-[2px]"
                />
                <a className="w-[50%] py-3 absolute bottom-6 left-0 right-0 inline-flex justify-center items-center border-2 border-indigo-500 mx-auto rounded-md bg-slate-50/10 hover:bg-indigo-500 cursor-pointer z-20">
                  <span className="text-slate-50">View</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action py-20">
          <div className="container mx-auo">
            <div className=" bg-indigo-900 w-full py-10 px-6 flex flex-col text-center gap-8 rounded-xl">
              <h3 className="text-2xl md:text-4xl text-slate-50 font-semibold">
                Discover more contents and vote
              </h3>
              <p className="w-[60%] mx-auto text-slate-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                illo fugit aliquid veritatis dolor voluptas ipsa quas nobis
                pariatur laborum distinctio.
              </p>
              <a
                href="#"
                className="w-[15%] inline-flex mx-auto justify-center items-center py-2 px-4 bg-indigo-500 rounded-md border border-indigo-500 hover:border-slate-50 hover:bg-transparent"
              >
                <span className="text-slate-50 font-medium text-base">
                  Explore
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
