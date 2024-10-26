import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./util/mongoClientPromise";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@util/utilityFunctions";


// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   adapter: MongoDBAdapter(mongoClientPromise, {
//     databaseName: process.env.ENVIRONMENT,
//   }),
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// });

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await mongoClientPromise;
        const usersCollection = client.db().collection("users");

        const user = await usersCollection.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with the provided email.");
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid password.");
        }

        return { email: user.email,name:user.name };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add the secret here
});