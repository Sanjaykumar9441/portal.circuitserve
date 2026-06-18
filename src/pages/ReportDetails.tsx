import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Report {
  _id: string;
  name: string;
  role: string;
  tasks: string;
  status: string;
  hoursWorked: number;
  tomorrowPlan: string;
  documentUrl?: string;
  submittedAt: string;
}

const ReportDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/progress/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReport(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-white">
        Loading report...
      </div>
    );
  }

  if (!report) {
    return (
      <div className="text-white">
        Report Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <button
        onClick={() => navigate("/reports")}
        className="mb-6 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl"
      >
        ← Back to Reports
      </button>

      <h1 className="text-4xl font-bold text-white mb-8">
        Progress Report
      </h1>

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-slate-400 mb-1">
              Name
            </p>

            <p className="text-white text-lg font-semibold">
              {report.name}
            </p>
          </div>

          <div>
            <p className="text-slate-400 mb-1">
              Role
            </p>

            <p className="text-cyan-400 text-lg font-semibold capitalize">
              {report.role}
            </p>
          </div>

          <div>
            <p className="text-slate-400 mb-1">
              Status
            </p>

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

          <div>
            <p className="text-slate-400 mb-1">
              Hours Worked
            </p>

            <p className="text-white">
              {report.hoursWorked} Hours
            </p>
          </div>

          <div>
            <p className="text-slate-400 mb-1">
              Submitted On
            </p>

            <p className="text-white">
              {new Date(report.submittedAt).toLocaleString()}
            </p>
          </div>

        </div>

        <div className="mt-8">
          <h3 className="text-slate-400 mb-2">
            Tasks Completed
          </h3>

          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-white whitespace-pre-wrap">
              {report.tasks}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-slate-400 mb-2">
            Tomorrow Plan
          </h3>

          <div className="bg-slate-800 rounded-2xl p-4">
            <p className="text-white whitespace-pre-wrap">
              {report.tomorrowPlan || "No plan provided"}
            </p>
          </div>
        </div>

        {report.documentUrl && (
          <div className="mt-8">
            <a
              href={report.documentUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl"
            >
              View Uploaded Document
            </a>
          </div>
        )}

      </div>
    </div>
  );
};

export default ReportDetails;