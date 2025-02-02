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
            src="https://media.licdn.com/dms/image/v2/D4E35AQGBihbceVVI_w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1719442247501?e=1738753200&v=beta&t=xcrxKQMFkebQN3OxPSjne9NrrfSQ7UzaOXJGUIq--Ko"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">
          Software Developer | Java | Next.js | Tailwind CSS | React Native
        </div>
        <div className="text-slate-400">628 followers . 500+ connections</div>
        <div className="payment flex gap-3 w-[80%]">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as a list of leaderboard */}
            <h2 className="text-lg font-bold my-5">Supporters</h2>
            <ul>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
              <li className="my-2">
                Ayush donated ₹20 with a message "Big Supporter"
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10"></div>
        </div>
      </div>
    </>
  );
};

export default Username;
