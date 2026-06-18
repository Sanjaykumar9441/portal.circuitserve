import { FileText, Download } from "lucide-react";

const documents = [
  {
    id: 1,
    name: "hero-design.pdf",
    uploadedBy: "Sanjay Kumar",
    date: "18 Jun 2026",
  },
  {
    id: 2,
    name: "iot-progress.docx",
    uploadedBy: "Naveen Sai",
    date: "18 Jun 2026",
  },
  {
    id: 3,
    name: "vlsi-report.pdf",
    uploadedBy: "Sanjay Siva Kumar",
    date: "18 Jun 2026",
  },
];

const Documents = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Documents
      </h1>

      <p className="text-slate-400 mb-8">
        Uploaded progress documents.
      </p>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <FileText className="text-cyan-400" />

              <div>
                <h3 className="font-semibold">
                  {doc.name}
                </h3>

                <p className="text-sm text-slate-400">
                  Uploaded by {doc.uploadedBy}
                </p>

                <p className="text-xs text-slate-500">
                  {doc.date}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-xl font-semibold">
              <Download size={16} />
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;