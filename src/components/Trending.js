import Image from "next/image";
import profile4 from "../../public/images/profile_4.jpg";

export default function Trending() {
  return (
    
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={profile4} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Arthur James
            </p>
            <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </a>
          </div>
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">Total Votes</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>1.1k</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={profile4} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Arthur James
            </p>
            <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </a>
          </div>
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">Total Votes</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>1.1k</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={profile4} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Arthur James
            </p>
            <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </a>
          </div>
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">Total Votes</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>1.1k</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={profile4} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Arthur James
            </p>
            <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </a>
          </div>
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">Total Votes</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>1.1k</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={profile4} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Arthur James
            </p>
            <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </a>
          </div>
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">Total Votes</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>1.1k</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={profile4} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 pb-5 border-b-2 border-indigo-800">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Arthur James
            </p>
            <a className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 cursor-pointer">
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </a>
          </div>
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">Total Votes</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>1.1k</span>
            </div>
          </div>
        </div>

        <div className=" col-span-full flex justify-center">
          <a
            href="#"
            className="text-base sm:text-lg hover:underline underline-offset-4 text-indigo-300"
          >
            Load more...
          </a>
        </div>
      </div>
  );
}
