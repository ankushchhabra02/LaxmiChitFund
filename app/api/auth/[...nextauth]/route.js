import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDB from "@/db/connectDb";

export const authOptions = {
  debug: true,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        try {
          await connectDB();
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
            });
          }
        } catch (err) {
          console.error("Error in signIn callback:", err);
          return false; // gracefully fail sign in
        }
      }
      return true;
    },

    async session({ session }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        session.user.name = dbUser?.username || session.user.email;
      } catch (err) {
        console.error("Error in session callback:", err);
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
