import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        // If you need role based protection, you can check token here
        // const token = req.nextauth.token;
        // const path = req.nextUrl.pathname;

        // Example: Only admin can access admin routes
        // if (path.startsWith("/dashboard/admin") && token?.role !== "admin") {
        //   return NextResponse.rewrite(new URL("/denied", req.url));
        // }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/checkout/:path*",
    ]
};
