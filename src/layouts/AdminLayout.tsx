import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
} from "lucide-react";
import { FolderOpen } from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6">

        <h1 className="text-2xl font-bold text-cyan-400 mb-10">
          CircuitServe
        </h1>

        <nav className="space-y-3">

          <Link
            to="/admin"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/team"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Users size={20} />
            Team Members
          </Link>

          <Link
            to="/reports"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <ClipboardList size={20} />
            Reports
          </Link>

          <Link
  to="/documents"
  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
>
  <FolderOpen size={20} />
  Documents
</Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;