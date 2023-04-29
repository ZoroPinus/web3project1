import profile5 from "../../public/images/profile_5.jpg";
import Image from "next/image";

export default function ModalWinner() {
    return (
      <div className="h-screen bg-neutral-700/60 fixed flex justify-center items-center w-full z-50 overflow-hidden">
        <div className="flex flex-col m-auto justify-center items-center bg-slate-50 p-6 w-[40%] rounded-lg">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-500">Congratulations to Nicco!</h3>
            <Image 
                src={profile5}
                className="rounded-full mb-4 w-[40%] mx-auto"
            />
            <p className="text-neutral-800 text-base mb-3">Your content - <span className="font-bold text-indigo-500">Comedy and Chaos</span> - won the Rising Star event!</p>
            <p className="text-neutral-800 text-sm">Total votes accumulated: <span className="font-bold text-indigo-500">1,000</span> </p>
        </div>
      </div>
    );
  }