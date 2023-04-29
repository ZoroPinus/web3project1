import Image from "next/image";
import profile4 from "../../public/images/profile_4.jpg";
import model from "../../public/images/model-walk.jpg";
import dance from "../../public/images/dance.jpg";
import comedy from "../../public/images/comedy.jpg";
import singing from "../../public/images/singing.jpg";
import acting from "../../public/images/acting.jpg";
import drawing from "../../public/images/drawing.jpg";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

export default function ActingTrend() {
  const [votes1, setVotes1] = useState(0);
  const [votes2, setVotes2] = useState(0);
  const [votes3, setVotes3] = useState(0);
  const [voteState, setVoteStat] = useState(true);
  const [votingTime, setVotingTime] = useState("");
  const [hideClock, setHideClock] = useState(false);
  var current_user_address;

  var provider;
  var main_address = "0xD52E0Cf72a31937D8c10ef350DF9414F44E889c6";
  const creators = [
    {
      id: "1",
      name: "Zoro D. Great",
      img: "../../public/images/profile_4.jpg",
      total: "votes",
    },
    {
      id: "2",
      name: "Juan D. LaCruz",
      img: "../../public/images/profile_4.jpg",
      total: "votes",
    },
    {
      id: "3",
      name: "Jack Cole",
      img: "../../public/images/profile_4.jpg",
      total: "votes",
    },
  ];

  async function transfer_token(vote_amount) {
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    var signer = provider.getSigner();
    current_user_address = await signer.getAddress();
    var data_params = null;
    var Address = current_user_address;

    var input_value = "0.001";

    var eth_hex_value = (input_value * Math.pow(10, 18)).toString(16);
 
    // var data = new ethers.Contract(
    //   "0xCFdf636831320bA50b4c4CCc6E895f9D2e75B0B0",
    //   mxcoin_abi,
    //   provider
    // );
    // data_params = data.interface.encodeFunctionData("transfer", [
    //   main_address,
    //   ethers.utils.parseUnits(input_value, 6),
    // ]);

    var data = new ethers.Contract(
      "0xCFdf636831320bA50b4c4CCc6E895f9D2e75B0B0",
      mxcoin_abi,
      provider
    );
    // data_params = data.interface.encodeFunctionData("transfer", [
    //   main_address,
    //   ethers.utils.parseUnits(input_value, 6),
    // ]);

    var transactionHash = await ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            to: current_user_address, // to token address
            from: current_user_address,
            value: eth_hex_value,
            data: data_params,
          },
        ],
      })
      .then((result) => {
        console.log("result");
        console.log(result);

        check_transactionHash(result);
      });
  }
  
 async function connect(){
    
    var provider  = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    var signer = provider.getSigner();
     current_user_address = await signer.getAddress();
    // setWalletStat(true);
  }

  async function voteMe1() {
    setVotes1(votes1 + 1);
  }
  async function voteMe2() {
    setVotes2(votes2 + 1);
  }
  async function voteMe3() {
    setVotes3(votes3 + 1);
  }
  function getWinner(user1, user2, user3) {
    const winner = Math.max(user1, user2, user3);
    return winner;
  }

  async function check_transactionHash(transactionHash) {
    console.log(`Checking Transaction...`);
  
    var getstatus;
    var etherscan;
    var api_key = 'JPRA5D5PDZVXXJNF6G39BW26RZ63RNZS1P';
  
    var net_check = window.ethereum.networkVersion;
  
    // more than one value is in test network
    if (!net_check == 1) {
        etherscan = "https://api-goerli.etherscan.io/api?module=transaction&action=";
    } else {
        etherscan = "https://api.etherscan.io/api?module=transaction&action=";
    }
  
    await fetch(etherscan + getstatus + "&txhash=" + transactionHash + "&apikey=" + api_key)
    
        .then((data) => {
            try {
                if (data.ok == true) {
                   console.log('transfer ok')
                }
            } catch (error) {
                console.log(error);
            }
            console.log(data);
        }).catch((error) => console.error(error));
  }

  var mxcoin_abi = [
    {
      inputs: [
        { internalType: "string", name: "_name", type: "string" },
        { internalType: "string", name: "_symbol", type: "string" },
        { internalType: "uint256", name: "_decimals", type: "uint256" },
        { internalType: "uint256", name: "_total_supply", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_spender", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "total_supply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_to", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_from", type: "address" },
        { internalType: "address", name: "_to", type: "address" },
        { internalType: "uint256", name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("4/29/2023 18:10:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        getWinner();
        setVoteStat(false);
        setHideClock(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={model} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 ">
            <p className="text-lg font-medium text-slate-50 mb-1">
            Stage and Screen
            </p>

            {/* DISABLED */}
            {/* <button className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-slate-400" disabled>
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button> */}

            <button onClick={()=>voteMe1()} className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-slate-400" >
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button>
          </div>

          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">#pageant</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              {/* SHOULD INCREMENT AFTER VOTING */}
              <span>{votes1}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={dance} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 ">
            <p className="text-lg font-medium text-slate-50 mb-1">
            Dance Fusion
            </p>
            <button onClick={()=>voteMe1()} className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-indigo-700" >
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button>
          </div>

          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">#dancing</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>{votes2}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={comedy} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 ">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Comedy in Chaos
            </p>
            <button onClick={()=>voteMe2()} className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-slate-400" >
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button>
          </div>
          
          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">#standUpComedy</p>
            <div className="text-sm text-slate-50 font-medium flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-slate-50 h-5 w-5"
                viewBox="0 0 512 512"
              >
                <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
              </svg>
              <span>{votes3}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full overflow-hidden pb-4 bg-indigo-950 border-2 border-indigo-500 rounded-lg ">
          <Image src={singing} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 ">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Unplugged and Unforgettable
            </p>
            <button onClick={()=>voteMe3()} className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-slate-400" >
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button>
          </div>

          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">#singing</p>
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
          <Image src={drawing} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5 ">
            <p className="text-lg font-medium text-slate-50 mb-1">
              Brushstrokes of Life
            </p>
            <button className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-slate-400" >
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button>
          </div>

          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">#painting</p>
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
          <Image src={acting} alt="profile-user-1" className="w-full mb-6" />
          <div className="flex w-full justify-between items-center px-5">
            <p className="text-lg font-medium text-slate-50 mb-1 ">
              The Method Actor
            </p>
            <button className="py-1 px-4 inline-flex justify-center items-center bg-indigo-700 rounded hover:bg-indigo-800 disabled:bg-slate-400" >
              <span className="text-base text-slate-50 font-medium ">Vote</span>
            </button>
          </div>
          

          <div className="flex w-full justify-between items-center px-5  pt-5 opacity-40">
            <p className="text-sm text-slate-50 font-medium">#acting</p>
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
