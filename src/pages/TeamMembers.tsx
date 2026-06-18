import { User, CheckCircle, Clock } from "lucide-react";

const members = [
  {
    name: "Sanjay Kumar",
    role: "Developer",
    status: "Submitted",
  },
  {
    name: "Sanjay Siva Kumar",
    role: "VLSI",
    status: "Pending",
  },
  {
    name: "Naveen Sai",
    role: "IoT",
    status: "Submitted",
  },
  {
    name: "Saketh Ram",
    role: "IoT",
    status: "Pending",
  },
  {
    name: "Rakesh",
    role: "PCB",
    status: "Submitted",
  },
  {
    name: "Varshith",
    role: "PCB",
    status: "Pending",
  },
];

const TeamMembers = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Team Members
        </h1>

        <p className="text-slate-400 mb-8">
          CircuitServe Technologies Team Overview
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {members.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-6 hover:border-cyan-500 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <User className="text-cyan-400" />

                {member.status === "Submitted" ? (
                  <CheckCircle className="text-green-400" />
                ) : (
                  <Clock className="text-yellow-400" />
                )}
              </div>

              <h3 className="text-xl font-semibold">
                {member.name}
              </h3>

              <p className="text-slate-400 mt-1">
                {member.role}
              </p>

              <div className="mt-5">
                {member.status === "Submitted" ? (
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    Submitted Today
                  </span>
                ) : (
                  <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TeamMembers;