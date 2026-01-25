import NextAuth, { AuthOptions, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// Custom user type
interface CustomUser extends DefaultUser {
  accessToken: string;
  role?: string;
  type?: string;
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.phone || !credentials.password) return null;

        // Use NEXT_PUBLIC_API_URL_POS from env
        const API_URL = process.env.NEXT_PUBLIC_API_URL_POS;
        // Use AAMAR_ID for Authorization token
        const AUTH_TOKEN = process.env.AAMAR_ID;

        try {
          const res = await fetch(`${API_URL}/ecom/customer/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${AUTH_TOKEN}`
            },
            body: JSON.stringify({
              phone: credentials.phone,
              password: credentials.password,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data.user || !data.token) return null;

          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            accessToken: data.token,
            type: data.user.type || "regular", // Assuming backend returns 'type': 'regular' | 'admin'
          };
        } catch (error) {
          console.error("Login Error:", error);
          return null;
        }
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as CustomUser).accessToken;
        token.type = (user as CustomUser).type;
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = (token as any).accessToken;
      // Pass the user type to the session
      (session.user as any).type = (token as any).type;
      return session;
    },
  },

  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
