import Image from "next/image";
import { Inter } from "next/font/google";
import nftImg from "../../public/images/nft-landing.jpg";
import profile1 from "../../public/images/profile_1.jpg";
import profile2 from "../../public/images/profile_2.jpg";
import profile3 from "../../public/images/profile_3.jpg";
import profile4 from "../../public/images/profile_4.jpg";
import profile5 from "../../public/images/profile_5.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full px-10 fixed top-0 z-40">
        <nav className="p-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="blinc-logo uppercase font-bold text-4xl text-slate-50 mr-16">
                BLINC
              </div>
              <ul className="nav-links flex gap-6">
                <li className="text-md sm:text-base text-slate-50 hover:text-indigo-500">
                  <a href="#">Home</a>
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
      </div>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="container mx-auto py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <h2 className="md:text-6xl text-4xl font-bold text-indigo-500 mb-7">
                #1 NFT Entertainment Platform in the Philippines
              </h2>
              <p className="text-base sm:text-lg md:text-2xl font-medium text-slate-50 mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci officia, velit esse ab in totam dolores dolorem
                debitis, aliquam illo nihil vero laboriosam.
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
            Top Creators
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
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="flex flex-col justify-center items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile1}
                alt="profile-user-1"
                className="w-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile2}
                alt="profile-user-1"
                className="w-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile3}
                alt="profile-user-1"
                className="w-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
            <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
              <Image
                src={profile4}
                alt="profile-user-1"
                className="w-full mb-6"
              />
              <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
                <p className="text-lg font-medium text-slate-50 mb-1">
                  Arthur James
                </p>
                <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
                  <span className="text-base text-slate-50 font-medium ">
                    Vote
                  </span>
                </a>
              </div>
              <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
                <p className="text-sm text-slate-50 font-medium">
                  Total Votes
                </p>
                <div className="text-sm text-slate-50 font-medium flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-slate-50" viewBox="0 0 512 512"><path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z"/></svg>
                  <span>
                    1.1k
                  </span> 
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg">
              <Image
                src={profile4}
                alt="profile-user-1"
                className="w-full mb-6"
              />
              <span className="text-lg font-medium text-slate-50 mb-1">
                Arthur James
              </span>
              <p className="text-sm text-slate-50 opacity-50">Dancer/Singer</p>
            </div>
          </div>
        </div>

        <div className="call-to-action py-20">
          <div className="container mx-auto">
            <div className=" bg-indigo-300 w-full py-10 px-6 flex flex-col text-center gap-8 rounded-xl">
              <h3 className="text-2xl md:text-4xl text-indigo-700 font-semibold">
                Discover more contents and vote
              </h3>
              <p className="w-[60%] mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                illo fugit aliquid veritatis dolor voluptas ipsa quas nobis
                pariatur laborum distinctio.
              </p>
              <a href="gallery/">
                <span>Explore</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
