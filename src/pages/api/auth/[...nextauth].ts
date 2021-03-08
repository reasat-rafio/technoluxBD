import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default async (req: NextApiRequest, res: NextApiResponse) => {
   await NextAuth(req, res, {
      providers: [
         Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
         }),
         Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         }),
      ],
      debug: process.env.NODE_ENV === "development",
      secret: process.env.AUTH_SECRET,
      jwt: {
         secret: process.env.JWT_SECRET,
      },
      // database: process.env.DATABASE_URL,
   });
};
