import Image from "next/image";
import { Inter } from "next/font/google";

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
                  <a href="../">Home</a>
                </li>
                <li className="text-md sm:text-base text-slate-50 hover:text-indigo-500">
                  <a href="#gallery">Gallery</a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="inline-flex cursor-pointer justify-center items-center px-4 py-3 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-slate-50 font-semibold text-md sm:text-base"
            >
              <span>Connect wallet</span>
            </a>
          </div>
        </nav>
      </div>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} scroll-smooth`}
      >
        <div className="container mx-auto pt-40" id="gallery">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="md:text-6xl text-4xl font-bold text-indigo-500 mb-4">
                Make your vote for your favorite creator!
              </h2>
              <p className="text-base sm:text-lg md:text-2xl font-medium text-slate-50 mx-auto ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci officia, velit esse ab in.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
