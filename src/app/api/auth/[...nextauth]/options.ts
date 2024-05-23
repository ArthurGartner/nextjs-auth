import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter username here",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password here",
        },
      },
      async authorize(credentials) {
        const user = { id: "42", name: "Arthur", password: "next-auth" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
