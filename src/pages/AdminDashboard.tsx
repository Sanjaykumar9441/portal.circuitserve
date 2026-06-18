import { Users, FileText, CheckCircle, Clock, } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {

    const [stats, setStats] = useState<any>(null);

useEffect(() => {
  fetchDashboard();
}, []);

const fetchDashboard = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/dashboard/stats`
    );

    setStats(data);
  } catch (error) {
    console.error(error);
  }
};

  const dashboardCards = [
  {
    title: "Team Members",
    value: stats?.totalMembers || 0,
    icon: Users,
  },
  {
    title: "Reports Submitted",
    value: stats?.totalReports || 0,
    icon: FileText,
  },
  {
    title: "Completed",
    value: stats?.completedReports || 0,
    icon: CheckCircle,
  },
  {
    title: "In Progress",
    value: stats?.inProgressReports || 0,
    icon: Clock,
  },
];

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">
        Dashboard
      </h1>

      <p className="text-slate-400 mb-10">
        Welcome to CircuitServe Portal
      </p>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {dashboardCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-slate-400 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    {item.value}
                  </h2>
                </div>

                <Icon
                  size={32}
                  className="text-cyan-400"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reports */}

      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-2xl font-semibold text-white mb-6">
          Recent Reports
        </h2>

        <div className="space-y-4">

          {stats?.recentReports?.map((report: any) => (
            <div
              key={report._id}
              className="flex justify-between items-center border-b border-slate-800 pb-4"
            >
              <div>
                <h3 className="text-white font-medium">
                  {report.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {report.role}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  report.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {report.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;