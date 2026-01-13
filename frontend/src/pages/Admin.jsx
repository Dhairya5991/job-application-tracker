import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  use_toggle:
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          Admin Control Panel
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

      {/* Users Table Card */}
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
        <h2 className="text-xl font-semibold text-white mb-6">
          Registered Users
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-white/70 border-b border-white/20">
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr
                  key={u._id}
                  className="border-b border-white/10 hover:bg-white/10 transition"
                >
                  <td className="py-4 px-4 text-white">
                    {u.email}
                  </td>

                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        u.role === "admin"
                          ? "bg-red-500/30 text-red-200"
                          : "bg-indigo-500/30 text-indigo-200"
                      }`}
                    >
                      {u.role.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {users.length === 0 && (
          <p className="text-center text-white/70 py-10">
            No users found
          </p>
        )}
      </div>
    </div>
  );
}
