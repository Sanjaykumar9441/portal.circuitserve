import { useParams } from "react-router-dom";
import reports from "../data/mockReports";

const ReportDetails = () => {
  const { id } = useParams();

  const report = reports.find(
    (item) => item.id === Number(id)
  );

  if (!report) {
    return (
      <div className="text-white">
        Report Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold text-white mb-8">
        Progress Report
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h3 className="text-slate-400">
              Name
            </h3>

            <p className="text-white text-lg">
              {report.name}
            </p>
          </div>

          <div>
            <h3 className="text-slate-400">
              Role
            </h3>

            <p className="text-white text-lg">
              {report.role}
            </p>
          </div>

          <div>
            <h3 className="text-slate-400">
              Status
            </h3>

            <p className="text-cyan-400">
              {report.status}
            </p>
          </div>

          <div>
            <h3 className="text-slate-400">
              Hours Worked
            </h3>

            <p className="text-white">
              {report.hoursWorked}
            </p>
          </div>
        </div>

        <div className="mt-8">

          <h3 className="text-slate-400 mb-2">
            Tasks Completed
          </h3>

          <p className="text-white">
            {report.tasks}
          </p>

        </div>

        <div className="mt-8">

          <h3 className="text-slate-400 mb-2">
            Tomorrow Plan
          </h3>

          <p className="text-white">
            {report.tomorrowPlan}
          </p>

        </div>

      </div>
    </div>
  );
};

export default ReportDetails;