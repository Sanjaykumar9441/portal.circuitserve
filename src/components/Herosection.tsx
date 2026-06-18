import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      {/* Grid */}
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
              Electronics • IoT • AI • VLSI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Transforming
              <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Ideas Into
              </span>
              Intelligent Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-lg text-slate-400"
            >
              From PCB Design and Embedded Systems to AI-Powered
              Devices and Semiconductor Solutions, CircuitServe
              Technologies helps innovators build the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
                Start Your Project
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400">
                Explore Services
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
              
              {/* Center Chip */}
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-500/30 bg-slate-900 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                <span className="text-xl font-bold">AI CHIP</span>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-0 left-10 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4">
                PCB Design
              </div>

              <div className="absolute top-10 right-0 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4">
                IoT Systems
              </div>

              <div className="absolute bottom-10 left-0 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4">
                Embedded
              </div>

              <div className="absolute bottom-0 right-10 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-4">
                VLSI Design
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;