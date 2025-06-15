"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - LaxmiChitFund";
  }, []);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="min-h-[86vh] flex items-center justify-center bg-black/40  px-4">
      <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-8 text-white text-center">
        {/* Logo / Rupee GIF */}
        <div className="mb-6">
          <div className="flex justify-center mb-2">
            <Image
              width={40}
              height={40}
              unoptimized
              src="./rupee.gif"
              alt="Rupee"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-1">
            Login to Laxmi Chit Fund
          </h1>
          <p className="text-sm text-gray-300">Secure. Simple. Smart.</p>
        </div>

        {/* Login button */}
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-3 w-full bg-white text-black border border-gray-300 rounded-lg px-5 py-3 font-medium text-sm hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="71"
              height="71"
              rx="14"
              fill="black"
              stroke="black"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.5 9C22.7593 9 11.5 20.2593 11.5 34C11.5 45.2246 18.9384 54.588 28.6178 58.1699C29.8558 58.4041 30.2823 57.6936 30.2823 57.0673C30.2823 56.4936 30.2565 54.8816 30.2565 53.1065C24.5 54.3936 23.4159 50.7852 23.4159 50.7852C22.3287 48.2536 20.7412 47.6127 20.7412 47.6127C18.5412 46.1065 20.918 46.1342 20.918 46.1342C23.3623 46.3093 24.6399 48.6492 24.6399 48.6492C26.8211 52.3386 30.5237 51.2821 31.9287 50.6014C32.1611 49.0816 32.7904 47.9802 33.4877 47.3767C28.9273 46.783 24.1359 44.9021 24.1359 37.9859C24.1359 35.6857 25.0041 33.7668 26.4092 32.2986C26.1645 31.6901 25.4321 29.4227 26.6536 26.4799C26.6536 26.4799 28.4521 25.8436 30.2315 27.4642C31.9183 26.998 33.7514 26.7636 35.5846 26.7636C37.4177 26.7636 39.2509 26.998 40.9377 27.4642C42.717 25.8436 44.5156 26.4799 44.5156 26.4799C45.7371 29.4227 45.0046 31.6901 44.7599 32.2986C46.1651 33.7668 47.0333 35.6857 47.0333 37.9859C47.0333 44.9192 42.2151 46.7742 37.6295 47.3767C38.4603 48.1065 39.1731 49.4436 39.1731 51.4127C39.1731 54.2708 39.1392 56.3158 39.1392 57.0673C39.1392 57.6936 39.5656 58.4291 40.8037 58.1699C50.4831 54.588 57.9215 45.2246 57.9215 34C57.9215 20.2593 46.7407 9 33 9H36.5Z"
              fill="white"
            />
          </svg>
          <span>Continue with GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
