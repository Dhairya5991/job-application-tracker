import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setJobs(res.data));
  }, []);

  const addJob = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/jobs",
      { company, position },
      { headers: { Authorization: "Bearer " + token } }
    );

    setJobs([res.data, ...jobs]);
    setCompany("");
    setPosition("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          Job Application Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location = "/";
          }}
          className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 text-white transition"
        >
          Logout
        </button>
      </div>

      {/* Add Job Card */}
      <div className="max-w-6xl mx-auto mb-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
        <h2 className="text-xl font-semibold text-white mb-4">
          Add New Job
        </h2>

        <form onSubmit={addJob} className="grid md:grid-cols-3 gap-4">
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
            required
            className="px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
            required
            className="px-4 py-3 rounded-lg bg-white/80 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition transform hover:scale-[1.02]"
          >
            Add Job
          </button>
        </form>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((j) => (
          <div
            key={j._id}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-1">
              {j.position}
            </h3>
            <p className="text-white/80">{j.company}</p>

            <span className="inline-block mt-4 px-3 py-1 text-sm rounded-full bg-indigo-500/30 text-indigo-200">
              Applied
            </span>
          </div>
        ))}
      </div>

      {jobs.length === 0 && (
        <p className="text-center text-white/70 mt-16">
          No job applications yet. Start by adding one 🚀
        </p>
      )}
    </div>
  );
}
