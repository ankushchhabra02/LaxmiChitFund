import Image from "next/image";
import Link from "next/link";
import { Wallet, UserPlus, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-6 text-white h-[60vh] px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
          Grow Your Wealth with India’s Most Secure Online Chit Fund
        </h1>
        <p className="max-w-xl text-sm md:text-base text-gray-300">
          Create your account, manage groups, and send or receive money safely
          with LaxmiChitFund.
        </p>
        <div className="flex flex-wrap gap-4">
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
        <p className="text-sm text-gray-400 mt-2">
          Trusted by 10,000+ users across India
        </p>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-20">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto text-white">
          <div className="space-y-4 flex flex-col items-center">
            <UserPlus size={100} className="text-white animate-bounce" />
            <h3 className="text-xl font-semibold">Create Your Account</h3>
            <p className="text-gray-300 text-sm">
              Sign up and complete your KYC to begin your saving journey.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <Wallet size={100} className="text-white animate-bounce" />
            <h3 className="text-xl font-semibold">Send & Receive Money</h3>
            <p className="text-gray-300 text-sm">
              Join a chit group and contribute monthly. Receive payouts
              securely.
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <BarChart3 size={100} className="text-white animate-bounce" />
            <h3 className="text-xl font-semibold">Track Your Progress</h3>
            <p className="text-gray-300 text-sm">
              Monitor contributions, withdrawals, and group activity in real
              time.
            </p>
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="py-20 px-6 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          See LaxmiChitFund in Action
        </h2>
        <p className="text-sm text-gray-400 max-w-xl text-center mb-10">
          A quick walkthrough showing how easy it is to use our platform to
          join, save, and grow.
        </p>
        <div className="w-full h-[40vh] md:w-[70%] md:h-[70vh] rounded-lg overflow-hidden bg-black">
          <video
            src="/demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full rounded-lg shadow-md object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Manage Everything from One Powerful Dashboard
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-10">
          Stay in control with our secure dashboard. Track contributions, view
          payout history, manage chit groups, and more.
        </p>
        <Image
          src="/demo.png"
          alt="Dashboard Preview"
          width={1000}
          height={500}
          className="rounded-lg mx-auto shadow-xl"
        />
      </div>

      {/* Trust Section */}
      <div className=" text-white py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-10">Why Choose LaxmiChitFund?</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold text-lg">🔐 Secure Transactions</h4>
            <p className="text-sm text-indigo-200 mt-2">
              All money transfers are end-to-end encrypted and logged for
              transparency.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">✅ Verified Members</h4>
            <p className="text-sm text-indigo-200 mt-2">
              Every user is verified through KYC before they join or create a
              chit group.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">📊 Transparent Tracking</h4>
            <p className="text-sm text-indigo-200 mt-2">
              Users can monitor their performance, contributions, and withdraw
              status at any time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
