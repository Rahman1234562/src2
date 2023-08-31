import { getByEmail, verifyPassword } from "@/services/user";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";



export const authOptions = {
  // Configure one or more authentication providers
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
       name: 'Credentials',
        async authorize({email, password}){

          // console.log("user email & password", email, password);
            const user = getByEmail(email);
            
            if(!user){
                throw new Error("user don't exist")
            }
            const isValid =  await  verifyPassword(password, user.password);
            if(!isValid){
                throw new Error("Incorrect Password")
            }
            return {email}
        }
    }),
  ],
}
export default NextAuth(authOptions)