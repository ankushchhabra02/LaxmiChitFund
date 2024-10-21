import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
        <div className="font-bold text-3xl">
          Build Your Wealth with Flexible, Secure Chit Funds
        </div>
        <p className="">
          Join LaxmiChitFund and start saving with ease while enjoying flexible
          financial solutions tailored to your needs.
        </p>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Join a Chit Fund
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
    </>
  );
}
