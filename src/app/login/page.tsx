"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        phone,
        password,
      });

      if (result?.error) {
        setError("Invalid phone or password");
      } else {
        // Redirection logic is handled by the middleware or dashboard page
        router.push("/dashboard/customer");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
          <div className="w-full max-w-md rounded-md border border-zinc-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-emerald-600 text-white text-lg font-bold">A</span>
                <span className="font-semibold text-zinc-900">Aaamr Dokan</span>
              </div>
              <h1 className="text-xl text-center font-semibold text-zinc-900">Sign in to your account</h1>
              <p className="mt-1 text-sm text-center text-zinc-600">Welcome back! Please enter your details.</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">Phone Number</label>
                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01700000000"
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-zinc-700">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-zinc-700">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 rounded border-zinc-300"
                    />
                    Remember me
                  </label>
                  <Link href="#" className="text-sm font-medium text-emerald-700 hover:underline">Forgot password?</Link>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Sign In
                </button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-zinc-200" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-2 text-zinc-500">or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <button
                    type="button"
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="flex justify-center items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors"
                  >
                    Google
                  </button>
                </div>

                <p className="text-center text-sm text-zinc-600">
                  Don&apos;t have an account? {" "}
                  <Link href="/register" className="font-medium text-emerald-700 hover:underline">Create account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
