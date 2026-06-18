import { motion } from "framer-motion";
import { ArrowRight, Users, ClipboardList, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
            >
              CircuitServe Technologies • Internal Team Portal
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Track Progress.
              <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Build Faster.
              </span>
              Grow Together.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-lg text-slate-400"
            >
              The official internal portal for CircuitServe Technologies team
              members. Submit daily progress updates, manage startup
              development activities, and collaborate efficiently across
              projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate("/login")}
                className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Team Login
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate("/daily-progress")}
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition"
              >
                Submit Progress
              </button>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative flex justify-center"
          >
            <div className="relative h-[450px] w-[450px]">
              {/* Center Portal Card */}
              <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-cyan-500/30 bg-slate-900 shadow-[0_0_50px_rgba(34,211,238,0.25)]">
                <ClipboardList className="mb-2 text-cyan-400" size={40} />
                <span className="text-xl font-bold">Portal</span>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-0 left-8 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-cyan-400" />
                  <span>6 Team Members</span>
                </div>
              </div>

              <div className="absolute top-10 right-0 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <ClipboardList size={18} className="text-cyan-400" />
                  <span>Daily Reports</span>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-cyan-400" />
                  <span>Active Projects</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-10 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <ArrowRight size={18} className="text-cyan-400" />
                  <span>Startup Growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;