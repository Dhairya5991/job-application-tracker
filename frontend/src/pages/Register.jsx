import axios from "axios";

export default function Register() {
  const submit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post("http://localhost:5000/api/auth/register", {
      email,
      password,
    });

    window.location = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500">
      {/* Glass card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>
        <p className="text-white/80 text-center mb-8">
          Join Job Application Tracker
        </p>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg transition transform hover:scale-[1.02]"
          >
            Register
          </button>
        </form>

        <p className="text-center text-white/80 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/"
            className="font-semibold text-white underline hover:text-emerald-200"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
