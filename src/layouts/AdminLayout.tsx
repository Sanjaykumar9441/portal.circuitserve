import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Users, ClipboardList } from "lucide-react";
import { FolderOpen } from "lucide-react";

const AdminLayout = () => {

    const user = JSON.parse(
  localStorage.getItem("user") || "{}"
);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-cyan-400 mb-6">
  CircuitServe
</h1>

<div className="mb-8 p-4 rounded-xl bg-slate-800 border border-slate-700">
  <p className="text-xs text-slate-400">
    Logged in as
  </p>

  <h3 className="font-semibold text-white mt-1">
    {user.name}
  </h3>

  <p className="text-cyan-400 text-sm capitalize">
    {user.role}
  </p>
</div>
        <nav className="space-y-3">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition ${
                isActive ? "bg-cyan-500 text-black" : "hover:bg-slate-800"
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition ${
                isActive ? "bg-cyan-500 text-black" : "hover:bg-slate-800"
              }`
            }
          >
            <Users size={20} />
            Team Members
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition ${
                isActive ? "bg-cyan-500 text-black" : "hover:bg-slate-800"
              }`
            }
          >
            <ClipboardList size={20} />
            Reports
          </NavLink>

          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition ${
                isActive ? "bg-cyan-500 text-black" : "hover:bg-slate-800"
              }`
            }
          >
            <FolderOpen size={20} />
            Documents
          </NavLink>
        </nav>

        <div className="mt-10">
          <button
            onClick={logout}
            className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
