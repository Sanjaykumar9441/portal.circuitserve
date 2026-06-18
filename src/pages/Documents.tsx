import { useEffect, useState } from "react";
import axios from "axios";

const Documents = () => {
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/progress`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const docs = data.filter(
        (report: any) => report.documentUrl
      );

      setDocuments(docs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Documents
      </h1>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc._id}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">
                {doc.name}
              </h3>

              <p className="text-slate-400 text-sm">
                {doc.role}
              </p>
            </div>

            <a
              href={`${import.meta.env.VITE_API_URL}${doc.documentUrl}`}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;