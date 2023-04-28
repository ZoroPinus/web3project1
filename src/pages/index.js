import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ethers } from 'ethers';
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  var current_user_address;
  var provider;
  var main_address = '0xD52E0Cf72a31937D8c10ef350DF9414F44E889c6';

 async function connect(){

  var provider  = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", []);
  var signer = provider.getSigner();
  current_user_address = await signer.getAddress();
  console.log('show user_address = ' + current_user_address);

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
                <p className="text-sm text-slate-50 font-medium">Total Votes</p>
                <div className="text-sm text-slate-50 font-medium flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-slate-50"
                    viewBox="0 0 512 512"
                  >
                    <path d="M394.23 197.56a300.43 300.43 0 00-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 00-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0112.49-4.51A126.48 126.48 0 01275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69z" />
                  </svg>
                  <span>1.1k</span>
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
}


 async function transfer_token(){
  var data_params = null;
  var Address = current_user_address;

  var input_value = '100000';

 var  eth_hex_value = (input_value * Math.pow(10, 18)).toString(16);


 var data = new ethers.Contract('0xCFdf636831320bA50b4c4CCc6E895f9D2e75B0B0', mxcoin_abi, provider);
 data_params = data.interface.encodeFunctionData('transfer', [main_address, ethers.utils.parseUnits(input_value, 6)])

  var transactionHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [{
        to: '0xCFdf636831320bA50b4c4CCc6E895f9D2e75B0B0', // to token address
        from: Address,
        value: eth_hex_value,
        data: data_params,
    }, ],
  }).then((result) => {
      console.log('result');
      console.log(result);
      
      // check_transactionHash(result);
  });


}


var mxcoin_abi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"uint256","name":"_total_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_supply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <br/>
          <button onClick={connect} className='bg-cyan-500'>Connect</button>
          <br/>

          <button onClick={transfer_token} className='bg-rose-700'>Transfer</button>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
