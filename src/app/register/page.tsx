"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
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
  };

  return (
    <div className="pt-16 min-h-screen bg-zinc-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
          <div className="w-full max-w-md rounded-md border border-zinc-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-emerald-600 text-white text-lg font-bold">G</span>
                <span className="font-semibold text-zinc-900">TechSoul Grocery</span>
              </div>
              <h1 className="text-xl text-center font-semibold text-zinc-900">Create your account</h1>
              <p className="mt-1 text-sm text-center text-zinc-600">Join us and start shopping.</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="rounded-md bg-rose-50 text-rose-700 border border-rose-200 px-3 py-2 text-sm">{error}</div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Full name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
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
                <div>
                  <label htmlFor="confirm" className="block text-sm font-medium text-zinc-700">Confirm password</label>
                  <input
                    id="confirm"
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <label className="inline-flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="h-4 w-4 rounded border-zinc-300"
                  />
                  I agree to the <Link href="#" className="font-medium text-emerald-700 hover:underline">Terms & Privacy</Link>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Create Account
                </button>

                <p className="text-center text-sm text-zinc-600">
                  Already have an account? {" "}
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