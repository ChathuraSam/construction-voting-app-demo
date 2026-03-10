"use client";

import { useState } from "react";

export function LoginCard() {
  const [mode, setMode] = useState<"admin" | "partner">("admin");

  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="mt-2 text-slate-600">Swap this stub with real Supabase auth.</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => setMode("admin")} className={`rounded-xl px-4 py-2 ${mode === "admin" ? "bg-slate-900 text-white" : "border"}`}>Admin</button>
        <button onClick={() => setMode("partner")} className={`rounded-xl px-4 py-2 ${mode === "partner" ? "bg-slate-900 text-white" : "border"}`}>Partner</button>
      </div>
      <div className="mt-6 space-y-3">
        <input className="w-full rounded-xl border px-3 py-2" placeholder={mode === "admin" ? "Admin email" : "Partner email or username"} />
        <input className="w-full rounded-xl border px-3 py-2" placeholder={mode === "admin" ? "Password" : "PIN or password"} type="password" />
        <button className="w-full rounded-xl bg-slate-900 px-4 py-2 text-white">Continue</button>
      </div>
    </div>
  );
}
