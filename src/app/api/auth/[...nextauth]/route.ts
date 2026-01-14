import NextAuth, { AuthOptions, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Custom user type
interface CustomUser extends DefaultUser {
  accessToken: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<CustomUser | null> {
        if (!credentials?.email || !credentials.password) return null;

        // Use NEXT_PUBLIC_API_URL_POS from env
        const API_URL = process.env.NEXT_PUBLIC_API_URL_POS;

        const res = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
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
        };
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = (user as CustomUser).accessToken;
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = (token as any).accessToken;
      return session;
    },
  },

  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
