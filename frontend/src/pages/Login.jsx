import axios from "axios";

export default function Login() {
  const submit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Glass card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Job Application Tracker
        </h1>
        <p className="text-white/80 text-center mb-8">
          Sign in to your dashboard
        </p>

        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/80 text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-white underline hover:text-indigo-200"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
