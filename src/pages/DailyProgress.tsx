import { useRef, useState } from "react";

const DailyProgress = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedName, setSelectedName] = useState("");
  const roleMap: Record<string, string> = {
    "Sanjay Kumar": "Developer",
    "Sanjay Siva Kumar": "VLSI",
    "Naveen Sai": "IoT",
    "Saketh Ram": "IoT",
    Rakesh: "PCB",
    Varshith: "PCB",
  };
  const [document, setDocument] = useState<File | null>(null);
  const [tasks, setTasks] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted");

    // Backend API call here later
  };

  import axios from "axios";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/progress",
      {
        name: selectedName,
        role: roleMap[selectedName],
        tasks,
        status,
        hoursWorked,
      }
    );

    alert("Progress Submitted");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl p-8 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl">
        <h1 className="text-4xl font-bold mb-2">Daily Progress Update</h1>

        <p className="text-slate-400 mb-8">
          Submit your daily work progress for CircuitServe Technologies.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <select
            required
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-500"
          >
            <option value="">Select Your Name</option>

            <option value="Sanjay Kumar">Sanjay Kumar</option>
            <option value="Sanjay Siva Kumar">Sanjay Siva Kumar</option>
            <option value="Naveen Sai">Naveen Sai</option>
            <option value="Rakesh">Rakesh</option>
            <option value="Saketh Ram">Saketh Ram</option>
            <option value="Varshith">Varshith</option>
          </select>

          {selectedName && (
            <>
              {/* Role */}
              <div className="mb-4">
                <input
                  type="text"
                  value={`Role: ${roleMap[selectedName] || ""}`}
                  readOnly
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-cyan-400 font-semibold"
                />
              </div>

              {/* Date */}
              <div className="mb-4">
                <label className="block mb-2 text-slate-300">
                  Submission Date
                </label>

                <input
                  type="text"
                  value={new Date().toLocaleDateString("en-IN")}
                  readOnly
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-300"
                />
              </div>

              {/* Tasks */}
              <textarea
                required
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                rows={4}
                placeholder="Tasks Completed Today in Paragraph"
                className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />

              <p className="text-xs text-slate-500 mb-4 text-right">
                {tasks.length} characters
              </p>

              {/* Document Upload */}
              <div className="mb-4">
                <label className="block mb-2 text-slate-300">
                  Upload Supporting Document{" "}
                  <span className="text-slate-500 text-sm">(Optional)</span>
                </label>

                {/* Hidden Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.rar,.jpg,.jpeg,.png"
                  onChange={(e) => setDocument(e.target.files?.[0] || null)}
                  className="hidden"
                />

                {/* Upload Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
                >
                  Upload File
                </button>

                {/* Selected File */}
                {document && (
                  <div className="mt-3 flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl p-3">
                    <span className="text-green-400 text-sm truncate">
                      📄 {document.name}
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setDocument(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      className="text-red-400 hover:text-red-300 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                )}

                <p className="text-xs text-slate-500 mt-2">
                  Supported formats: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, ZIP,
                  RAR, JPG, PNG
                </p>
              </div>

              {/* Status */}
              <select
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-500"
              >
                <option value="">Select Status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>

              {/* Hours */}
              <input
                required
                type="number"
                min="0"
                max="24"
                value={hoursWorked}
                onChange={(e) => setHoursWorked(e.target.value)}
                placeholder="Hours Worked"
                className="w-full p-4 mb-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />

              {/* Tomorrow Plan */}
              <textarea
                rows={3}
                placeholder="Plan for Tomorrow"
                className="w-full p-4 mb-6 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-bold py-4 rounded-xl"
          >
            {loading ? "Submitting..." : "Submit Progress"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DailyProgress;
