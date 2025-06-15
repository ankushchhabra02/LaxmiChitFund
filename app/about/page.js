import { Users, Gavel, TrendingUp } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        About Laxmi Chit Fund
      </h1>
      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
        Laxmi Chit Fund is a trusted and transparent financial service
        empowering individuals and businesses with a secure way to save and
        access credit. With a strong commitment to customer satisfaction, we
        help members reach their financial goals through efficient chit fund
        models.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold mb-10 text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-10 text-center mb-10">
        <div className="flex flex-col items-center space-y-4">
          <Users size={64} className="text-white animate-bounce" />
          <h3 className="text-xl font-semibold">Join a Chit Group</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Become a member of a chit group tailored to your financial goals.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Gavel size={64} className="text-white animate-bounce" />
          <h3 className="text-xl font-semibold">Participate in Auctions</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Place bids and access pooled funds quickly when you need them.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <TrendingUp size={64} className="text-white animate-bounce" />
          <h3 className="text-xl font-semibold">Enjoy Financial Growth</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Save smartly and grow your wealth with disciplined contributions.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Choose Laxmi Chit Fund?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">✅</div>
            <h4 className="font-semibold text-lg">Trusted & Compliant</h4>
            <p className="text-sm text-gray-300">
              Fully legal and trusted chit fund operations backed by
              regulations.
            </p>
          </div>
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">🔐</div>
            <h4 className="font-semibold text-lg">Secure Transactions</h4>
            <p className="text-sm text-gray-300">
              End-to-end encrypted and transparent transactions ensure safety.
            </p>
          </div>
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">📈</div>
            <h4 className="font-semibold text-lg">Flexible Plans</h4>
            <p className="text-sm text-gray-300">
              Choose chit plans tailored for individuals or businesses with
              ease.
            </p>
          </div>
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">💳</div>
            <h4 className="font-semibold text-lg">No Loan Hassles</h4>
            <p className="text-sm text-gray-300">
              Access pooled funds easily without going through loan procedures.
            </p>
          </div>
        </div>
      </div>

      {/* Member Benefits */}
      <div className="py-20 px-6 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Member Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">💰</div>
            <h4 className="font-semibold text-lg">Disciplined Saving</h4>
            <p className="text-sm text-gray-300">
              Regular contributions help you build a stable financial habit.
            </p>
          </div>
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">🛡️</div>
            <h4 className="font-semibold text-lg">Emergency Funds</h4>
            <p className="text-sm text-gray-300">
              Withdraw from the fund whenever urgent financial needs arise.
            </p>
          </div>
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">📊</div>
            <h4 className="font-semibold text-lg">Better Returns</h4>
            <p className="text-sm text-gray-300">
              Get more value than typical savings accounts or FDs.
            </p>
          </div>
          <div className="  p-6  flex flex-col items-center space-y-3">
            <div className="text-3xl ">📥</div>
            <h4 className="font-semibold text-lg">Financial Support</h4>
            <p className="text-sm text-gray-300">
              Meet both personal and business goals without loans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Laxmi Chit Fund",
};
