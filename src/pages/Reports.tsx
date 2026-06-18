import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Report {
  _id: string;
  name: string;
  role: string;
  tasks: string;
  status: string;
  hoursWorked: number;
  tomorrowPlan: string;
  submittedAt: string;
}

const Reports = () => {
  const navigate = useNavigate();

  const [reports, setReports] = useState<Report[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/progress`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setReports(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "All" || report.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Progress Reports</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Member..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex-1"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>

      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div
              key={report._id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{report.name}</h3>

                  <p className="text-slate-400">{report.role}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    report.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {report.status}
                </span>
              </div>

              <div className="mt-4 text-sm text-slate-400">
                Hours Worked: {report.hoursWorked}
              </div>

              <div className="text-sm text-slate-400">
                Date: {new Date(report.submittedAt).toLocaleDateString()}
              </div>

              <button
                onClick={() => navigate(`/reports/${report._id}`)}
                className="mt-4 bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold"
              >
                View Report
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
