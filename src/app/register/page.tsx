"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL_POS;

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (!agree) {
      setError("You must agree to the Terms");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Registration API call
      const res = await fetch(`${BASE_URL}/ecom/customer/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username: email.split("@")[0], // example username from email
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Auto-login after registration
      const loginResult = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (loginResult?.error) {
        setError("Auto-login failed. Please login manually.");
        setLoading(false);
        return;
      }

      // Redirect to dashboard or home
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
          <div className="w-full max-w-md rounded-md border border-zinc-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-emerald-600 text-white text-lg font-bold">A</span>
                <span className="font-semibold text-zinc-900">Aaamr Dokan</span>
              </div>
              <h1 className="text-xl text-center font-semibold text-zinc-900">Create your account</h1>
              <p className="mt-1 text-sm text-center text-zinc-600">Join us and start shopping.</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {error && <div className="rounded-md bg-rose-50 text-rose-700 border border-rose-200 px-3 py-2 text-sm">{error}</div>}
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Full name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Phone</label>
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700">Confirm password</label>
                  <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required
                    className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-emerald-600" />
                </div>

                <label className="inline-flex items-center gap-2 text-sm text-zinc-700">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-4 w-4 rounded border-zinc-300" />
                  I agree to the <Link href="#" className="font-medium text-emerald-700 hover:underline">Terms & Privacy</Link>
                </label>

                <button type="submit" disabled={loading}
                  className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-70">
                  {loading ? "Creating..." : "Create Account"}
                </button>

                <p className="text-center text-sm text-zinc-600">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-emerald-700 hover:underline">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
