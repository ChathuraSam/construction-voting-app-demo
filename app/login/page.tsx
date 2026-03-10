import SectionCard from "@/components/SectionCard";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-4xl p-6 md:p-10">
      <h1 className="mb-6 text-3xl font-bold">Login</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <SectionCard title="Admin Login" subtitle="Connect to Supabase Auth">
          <form className="space-y-3">
            <input type="email" placeholder="Admin email" />
            <input type="password" placeholder="Password" />
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-white">Sign in</button>
          </form>
        </SectionCard>
        <SectionCard title="Partner Login" subtitle="Use email/password or PIN flow">
          <form className="space-y-3">
            <input type="email" placeholder="Partner email" />
            <input type="password" placeholder="Password or PIN" />
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-white">Sign in</button>
          </form>
        </SectionCard>
      </div>
    </main>
  );
}
