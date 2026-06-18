import { useEffect, useState } from "react";
import axios from "axios";
import { Download, FileText } from "lucide-react";

interface DocumentItem {
  _id: string;
  name: string;
  role: string;
  documentUrl: string;
  submittedAt: string;
}

const Documents = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Documents
      </h1>

      <p className="text-slate-400 mb-8">
        Uploaded supporting files
      </p>

      {loading ? (
        <p>Loading documents...</p>
      ) : documents.length === 0 ? (
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 text-center">
          No documents uploaded yet.
        </div>
      ) : (
        <div className="space-y-4">
          {documents.map((doc) => (
            <div
              key={doc._id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <FileText className="text-cyan-400" />

                <div>
                  <h3 className="font-semibold">
                    {doc.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {doc.role}
                  </p>

                  <p className="text-slate-500 text-xs">
                    {new Date(
                      doc.submittedAt
                    ).toLocaleString()}
                  </p>
                </div>
              </div>

              <a
                href={doc.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold flex items-center gap-2"
              >
                <Download size={16} />
                Open
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;