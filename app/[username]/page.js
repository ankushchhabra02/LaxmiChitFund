import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350]"
          src="https://media.licdn.com/dms/image/v2/D4D16AQHQKVdNNCceZw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1682089688391?e=1743638400&v=beta&t=u_Dkn36HMqAvAyzooibw6h3cHUDFtbgXD3IJxMTB_Vk"
          alt=""
        />
        <div className="absolute -bottom-20 right-[44%] border-white border-2 rounded-full ">
          <img
            className="rounded-full"
            width={200}
            height={200}
            src="https://media.licdn.com/dms/image/v2/D4E35AQGBihbceVVI_w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719442247501?e=1741507200&v=beta&t=8OLVJjwGsZBAcdmSNbA4JQqxrtDmMpI5KI8dR4P07PM"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">
          Software Developer | Java | Next.js | Tailwind CSS | React Native
        </div>
        <div className="text-slate-400">628 followers . 500+ connections</div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as a list of leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img
                  className="border-none rounded-full"
                  width={33}
                  src="profile.gif"
                  alt="user avatar"
                />
                <span>
                  Ayush donated <span className="font-bold">₹20</span> with a
                  message "Big Supporter"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img
                  className="border-none rounded-full"
                  width={33}
                  src="profile.gif"
                  alt="user avatar"
                />
                <span>
                  Ayush donated <span className="font-bold">₹20</span> with a
                  message "Big Supporter"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img
                  className="border-none rounded-full"
                  width={33}
                  src="profile.gif"
                  alt="user avatar"
                />
                <span>
                  Ayush donated <span className="font-bold">₹20</span> with a
                  message "Big Supporter"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img
                  className="border-none rounded-full"
                  width={33}
                  src="profile.gif"
                  alt="user avatar"
                />
                <span>
                  Ayush donated <span className="font-bold">₹20</span> with a
                  message "Big Supporter"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img
                  className="border-none rounded-full"
                  width={33}
                  src="profile.gif"
                  alt="user avatar"
                />
                <span>
                  Ayush donated <span className="font-bold">₹20</span> with a
                  message "Big Supporter"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img
                  className="border-none rounded-full"
                  width={33}
                  src="profile.gif"
                  alt="user avatar"
                />
                <span>
                  Ayush donated <span className="font-bold">₹20</span> with a
                  message "Big Supporter"
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            {/* Or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay ₹20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay ₹50</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay ₹100</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
