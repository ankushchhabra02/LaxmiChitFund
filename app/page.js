import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className="font-bold md:text-5xl flex gap-3 justify-center items-center text-3xl">
          Build Your Wealth with Flexible, Secure Chit Funds
          <span>
            <Image height={50} width={50} src="/rupee.gif" alt="" />
          </span>
        </div>
        <p className="text-center md:text-left">
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

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h1 className="text-3xl font-bold text-center mb-14">
          Start Saving Today!
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              // className="bg-gray-500 rounded-full p-2"
              width={100}
              height={100}
              src="/piggybank.gif"
              unoptimized
              alt=""
            />
            <p className="font-bold text-center">Choose Your Chit Fund</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              // className="bg-gray-500 rounded-full p-2"
              width={100}
              height={100}
              unoptimized
              src="/piggybank.gif"
              alt=""
            />
            <p className="font-bold text-center">Choose Your Chit Fund</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              // className="bg-gray-500 rounded-full p-2"
              width={100}
              height={100}
              unoptimized
              src="/piggybank.gif"
              alt=""
            />
            <p className="font-bold text-center">Choose Your Chit Fund</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">
          Start Saving Today!
        </h2>
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/qyxCSLK2VQc?si=tSljlZYlrsHGuxTW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
