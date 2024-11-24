import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { connectToDatabase } from "@/db/connect";
import User from "@/models/User"; // Correct import

const Handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ], // Add this line
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        // Ensure database connection
        await connectToDatabase();
    
        // Check if user exists in the database
        const existingUser = await User.findOne({ email: user.email });
    
        if (!existingUser) {
          // Create a new user in the database
          await User.create({
            name: user.name || profile.name,
            email: user.email,
            pic: user.image || profile.avatar_url,
            linkdin: "",
            about: "User signed up using GitHub",
          });
        }
    
        return true; // Allow sign-in
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; // Deny sign-in
      }
    }
    
  },
});

export { Handler as POST, Handler as GET };
