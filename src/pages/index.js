import Image from "next/image";
import { Inter } from "next/font/google";
import nftImg from "../../public/images/nft-landing.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full px-10 fixed top-0">
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
                  <a href="#">Gallery</a>
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
              <h2 className="text-6xl font-bold text-indigo-500">
                #1 NFT Entertainment Platform in the Philippines
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci officia, velit esse ab in totam dolores dolorem
                debitis, aliquam illo nihil vero laboriosam.
              </p>
              <a
                href="#"
                className="inline-flex justify-center items-center px-4 py-3 rounded-lg border border-indigo-700 hover:bg-indigo-800 text-slate-50 font-semibold text-md sm:text-base"
              >
                <span>Connect wallet</span>
              </a>
            </div>
            <div className="flex justify-center items-center">
              <Image src={nftImg} alt="" className="w-[80%] rounded-2xl" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
