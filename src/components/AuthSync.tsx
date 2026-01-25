"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "@/lib/store/features/authSlice";

export default function AuthSync() {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            // Sync NextAuth session to Redux
            // Note: session.accessToken might be on session object if we augmented types correctly
            // but here we check what's available.
            const user = session.user;
            const token = (session as any).accessToken || "";

            dispatch(loginSuccess({ user, token }));
        } else if (status === "unauthenticated") {
            dispatch(logout());
        }
    }, [session, status, dispatch]);

    return null;
}
