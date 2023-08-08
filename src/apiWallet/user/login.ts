import { USER_LOGIN } from "@/src/constants/apiPath";
import { fetcher } from "@/src/helpers/fetcher";
import { ICredentials } from "@/src/types/registerValues";
import { IAuthCredentials, CurrentUser } from "@/src/types/user";

export const login = async (credentials: IAuthCredentials) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(credentials),
  };

  const data = await fetcher<CurrentUser>(`${USER_LOGIN}`, options);

  return data;
};


// callbacks: {
//   async jwt({ token, user }) {
//     // console.log("First+++++++++++++++++++++++++++++");

//     // console.log("user:", user);
//     // console.log("token>>>>>>>>>>>>>>>>>>>>>>>>>>>", token);
//     // console.log("user========================",user);
//     // return { ...token, ...user };

//     if (user) {
//       const result = {
//         ...token,
//         token: user.token,
//         user: user.user,
//       };
//       // console.log("result***********фффффффффф", result);
//       return result;
//     } else {
//       // console.log("jwt$$$$$$$$$$$$$$$", token);
//       return token;
//     }
//   },
//   async session({ session, token }) {
//     const currentUser = {
//       user: token.user,
//       token: token.token,
//     } as CurrentUser;

//     return { ...session, ...currentUser };
//   },
// },