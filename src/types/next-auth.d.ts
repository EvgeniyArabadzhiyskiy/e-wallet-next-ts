import NextAuth from "next-auth";
import { User } from "./user";

declare module "next-auth" {
  interface Session {
    user: User;
    // user?: User;
  }

  // interface User {
  //   token: string;

  //   user: {
  //     email: string;
  //     firstName: string;
  //     balance: number;
  //   };
  // }
}
