import { useEffect, useState } from "react";
import axios from "axios";
import { UserPlus } from "lucide-react";

interface Member {
  _id: string;
  name: string;
  email: string;
  role: string;
  submittedToday: boolean;
}

const TeamMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const { data } = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/dashboard/team-status`
);

      setMembers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createMember = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/members`,
        {
          name,
          email,
          password,
          role,
        }
      );

      setShowModal(false);

      setName("");
      setEmail("");
      setPassword("");
      setRole("member");

      fetchMembers();
    } catch (error) {
      console.error(error);
      alert("Failed to create member");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Team Members
          </h1>

          <p className="text-slate-400">
            Manage CircuitServe Team
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
        >
          <UserPlus size={18} />
          Add Member
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {members.map((member) => (
                <tr
                  key={member._id}
                  className="border-b border-slate-800"
                >
                  <td className="p-4">
                    {member.name}
                  </td>

                  <td className="p-4">
                    {member.email}
                  </td>

                  <td className="p-4 capitalize">
  {member.role}
</td>

<td className="p-4">
  {member.submittedToday ? (
    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
      Submitted
    </span>
  ) : (
    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
      Pending
    </span>
  )}
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-lg">

            <h2 className="text-2xl font-bold mb-6">
              Add Member
            </h2>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full p-4 mb-4 rounded-xl bg-slate-800"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full p-4 mb-4 rounded-xl bg-slate-800"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full p-4 mb-4 rounded-xl bg-slate-800"
            />

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="w-full p-4 mb-6 rounded-xl bg-slate-800"
            >
              <option value="member">
                Member
              </option>

              <option value="admin">
                Admin
              </option>
            </select>

            <div className="flex gap-4">
              <button
                onClick={createMember}
                className="flex-1 bg-cyan-500 text-black py-3 rounded-xl font-semibold"
              >
                Create
              </button>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="flex-1 bg-red-500 py-3 rounded-xl"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;