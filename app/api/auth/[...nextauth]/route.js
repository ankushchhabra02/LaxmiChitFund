import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const authOptions = {
  debug: false, // Set to false for production
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

          return true;
        } catch (error) {
          console.error("signIn error:", error);
          return false;
        }
      }

      return true;
    },

    async session({ session }) {
      try {
        await connectDB();

        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;
        }

        return session;
      } catch (error) {
        console.error("session error:", error);
        return session;
      }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
