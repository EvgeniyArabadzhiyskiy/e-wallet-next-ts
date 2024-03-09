import { signIn, signUp } from "@/src/apiWallet/user";
import { privateProcedure, publicProcedure, router } from "../trpc";
import {
  loginValidator,
  registrationValidator,
} from "@/src/helpers/formValidation";
import { signOut } from "@/src/apiWallet/user";
import { prismaControllerWrapper } from "@/src/helpers/prismaControllerWrapper";

export const authRouter = router({
  signOut: privateProcedure
  .mutation(async ({ ctx }) => {

    const { userID } = ctx;
    return await prismaControllerWrapper(async () => await signOut(userID));
  }),

  signUp: publicProcedure
    .input(registrationValidator)
    .mutation(async ({ input }) => {

      return await prismaControllerWrapper(async () => await signUp(input));
    }),

  signIn: publicProcedure
  .input(loginValidator)
  .mutation(async ({ input }) => {
    
    return await prismaControllerWrapper(async () => await signIn(input));
  }),
});
