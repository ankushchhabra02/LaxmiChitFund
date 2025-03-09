import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
        <div className="font-bold text-5xl flex gap-3 justify-center items-center">
          Build Your Wealth with Flexible, Secure Chit Funds
          <span>
            <img width={50} src="./rupee.gif" alt="" />
          </span>
        </div>
        <p className="">
          Join LaxmiChitFund and start saving with ease while enjoying flexible
          financial solutions tailored to your needs.
        </p>
        <div>
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Join a Chit Fund
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">
          Start Saving Today!
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              // className="bg-gray-500 rounded-full p-2"
              width={100}
              src="./piggybank.gif"
              alt=""
            />
            <p className="font-bold">Choose Your Chit Fund</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              // className="bg-gray-500 rounded-full p-2"
              width={100}
              src="./piggybank.gif"
              alt=""
            />
            <p className="font-bold">Choose Your Chit Fund</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              // className="bg-gray-500 rounded-full p-2"
              width={100}
              src="./piggybank.gif"
              alt=""
            />
            <p className="font-bold">Choose Your Chit Fund</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Start Saving Today!
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qyxCSLK2VQc?si=tSljlZYlrsHGuxTW"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
