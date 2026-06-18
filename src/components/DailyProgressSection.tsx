import { motion } from "framer-motion";
import { ClipboardList, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DailyProgressSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-24 bg-[#08101f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl p-10 md:p-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                <ClipboardList className="h-10 w-10 text-cyan-400" />
              </div>
            </div>

            <h2 className="text-center text-4xl font-bold text-white">
              Daily Progress Updates
            </h2>

            <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
              All CircuitServe team members are required to submit their daily
              progress updates. This helps us track project development,
              maintain accountability, and ensure smooth collaboration.
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => navigate("/daily-progress")}
                className="group flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-black font-semibold hover:bg-cyan-400 transition-all duration-300"
              >
                Submit Today's Progress
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-slate-500">
              Deadline: Submit before 11:59 PM every day
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyProgressSection;
