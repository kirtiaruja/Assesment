import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add more providers as needed
  ],
  // Other NextAuth.js options
};

export default (req, res) => NextAuth(req, res, options);