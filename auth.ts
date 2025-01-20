import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),


    Credentials({
      name: 'Credentials',

      credentials:{
        email: {label: "Email", type:"email"},
        password: {label: "Password", type: "password"}
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if(!email || !password){
          throw new CredentialsSignin('Please provide both email and password')
        }

        await connectDB()

        const user = await User.findOne({email}).select("+password +role")
        if(!user){
          throw new CredentialsSignin('Invalid Email or Password')
        }

        if(!user.password){
          throw new CredentialsSignin('Invalid Email or Password')
        }

        const isMatched = await compare(password, user.password)
        if(!isMatched){
          throw new CredentialsSignin('Password did not match')
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id
        }

        return userData
      }
    })
  ],
  pages:{
    signIn: "/login"
  },
  callbacks:{
    async session({session, token}){
      if(token?.sub && token?.role){
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({token, user}){
      if(user){
        token.role= user.role
      }
      return token;
    },
    signIn: async({user, account}) => {
      if(account?.provider === 'google'){
        try {
          const  {email, name ,image, id} = user
          await connectDB()
          const alreadyExistingUser = await User.find({email})
          if(!alreadyExistingUser){
            await User.create({email, name, image, authproviderId: id})
          } else{
            return true
          }
        } catch (error) {
          throw new Error('Error while creating account')
        }
      }

      if(account?.provider === 'credentials'){
        return true;
      } else{
        return false;
      }

    },
  }
})