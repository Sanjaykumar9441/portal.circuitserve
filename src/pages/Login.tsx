import { useState } from "react";
import { Mail, Lock, Shield } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend API later
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Shield className="h-10 w-10 text-cyan-400" />
          </div>

          <h1 className="text-4xl font-bold text-white">
            CircuitServe
          </h1>

          <p className="text-slate-400 mt-2">
            Team Management Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold text-white mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin}>

            <div className="relative mb-4">
              <Mail
                className="absolute left-4 top-4 text-slate-500"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="relative mb-6">
              <Lock
                className="absolute left-4 top-4 text-slate-500"
                size={20}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Login;