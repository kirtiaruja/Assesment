import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    }),
    // Add more providers as needed
  ],
  // Other NextAuth.js options
};

export default options;
