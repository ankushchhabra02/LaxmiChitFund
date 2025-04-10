import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-8 md:px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">About Laxmi Chit Fund</h1>
      <p className="text-lg mb-6">
        Laxmi Chit Fund is a trusted and transparent financial service providing
        individuals and businesses with a secure way to save and access credit.
        With a strong commitment to customer satisfaction, we offer an efficient
        chit fund model that helps members achieve their financial goals.
      </p>

      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-center mb-6">
          <Image
            className="w-20 h-20 rounded-full mr-4"
            src="/piggybank.gif"
            alt="Join a Chit Group"
            width={80}
            height={80}
            unoptimized
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Join a Chit Group</h3>
            <p>
              Become a member of a chit fund group that suits your financial
              needs.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <Image
            className="w-20 h-20 rounded-full mr-4"
            src="/piggybank.gif"
            alt="Participate in Auctions"
            width={80}
            height={80}
            unoptimized
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Participate in Auctions
            </h3>
            <p>Bid for the pooled amount and access funds when needed.</p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <Image
            className="w-20 h-20 rounded-full mr-4"
            src="/piggybank.gif"
            alt="Enjoy Financial Growth"
            width={80}
            height={80}
            unoptimized
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Enjoy Financial Growth
            </h3>
            <p>Save and invest with disciplined financial planning.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Why Choose Laxmi Chit Fund?
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Trusted and legally compliant chit fund services
        </li>
        <li className="mb-2">Secure and transparent financial transactions</li>
        <li className="mb-2">
          Flexible chit plans for individuals and businesses
        </li>
        <li className="mb-2">
          Easy access to credit without traditional loans
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Benefits for Members</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">A disciplined way to save and invest</li>
        <li className="mb-2">Access to funds in emergencies</li>
        <li className="mb-2">Higher returns compared to traditional savings</li>
        <li className="mb-2">
          Financial support for personal and business needs
        </li>
      </ul>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Laxmi Chit Fund",
};
