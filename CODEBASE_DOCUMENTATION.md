# CircuitServe Website - Complete Codebase Documentation

**Project**: CircuitServe - Electronics, IoT, AI & VLSI Solutions  
**Type**: Full-Stack Application (React + TypeScript Frontend, Node.js + Express Backend)  
**Generated**: 2026-06-18

---

## Table of Contents

1. [Frontend - Configuration Files](#frontend---configuration-files)
2. [Frontend - Main Application](#frontend---main-application)
3. [Frontend - Components](#frontend---components)
4. [Frontend - Pages](#frontend---pages)
5. [Frontend - Layouts](#frontend---layouts)
6. [Frontend - Types & Data](#frontend---types--data)
7. [Frontend - Styles](#frontend---styles)
8. [Backend - Configuration](#backend---configuration)
9. [Backend - Server](#backend---server)
10. [Backend - Models](#backend---models)
11. [Backend - Routes](#backend---routes)

---

# FRONTEND - CONFIGURATION FILES

## package.json
```json
{
  "name": "circuitserve-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.1",
    "axios": "^1.18.0",
    "framer-motion": "^12.40.0",
    "lucide-react": "^1.20.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.18.0",
    "tailwindcss": "^4.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}
```

## vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## eslint.config.js
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
```

## tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>circuitserve-website</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

# FRONTEND - MAIN APPLICATION

## src/main.tsx
```typescript
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## src/App.tsx
```typescript
import { Routes, Route } from "react-router-dom";

import HeroSection from "./components/Herosection";
import DailyProgressSection from "./components/DailyProgressSection";
import DailyProgress from "./pages/DailyProgress";
import AdminDashboard from "./pages/AdminDashboard";
import TeamMembers from "./pages/TeamMembers";
import AdminLayout from "./layouts/AdminLayout";
import Reports from "./pages/Reports";
import Documents from "./pages/Documents";
import Login from "./pages/Login";
import ReportDetails from "./pages/ReportDetails";

function Home() {
  return (
    <>
      <HeroSection />
      <DailyProgressSection />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/daily-progress" element={<DailyProgress />} />

      <Route path="/login" element={<Login />} />

      <Route
  path="/reports/:id"
  element={<ReportDetails />}
/>

      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/team" element={<TeamMembers />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/documents" element={<Documents />} />
      </Route>
    </Routes>
  );
}

export default App;
```

---

# FRONTEND - COMPONENTS

## src/components/Herosection.tsx
```typescript
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

## src/components/DailyProgressSection.tsx
```typescript
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
```

---

# FRONTEND - PAGES

## src/pages/AdminDashboard.tsx
```typescript
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
} from "lucide-react";

import reports from "../data/mockReports";

const AdminDashboard = () => {
  const totalMembers = 6;

  const totalReports = reports.length;

  const completedReports = reports.filter(
    (report) => report.status === "Completed"
  ).length;

  const pendingReports =
    totalMembers - completedReports;

  const stats = [
    {
      title: "Team Members",
      value: totalMembers,
      icon: Users,
    },
    {
      title: "Reports Submitted",
      value: totalReports,
      icon: FileText,
    },
    {
      title: "Completed",
      value: completedReports,
      icon: CheckCircle,
    },
    {
      title: "Pending",
      value: pendingReports,
      icon: Clock,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-2">
        Dashboard
      </h1>

      <p className="text-slate-400 mb-10">
        Welcome to CircuitServe Portal
      </p>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-slate-400 text-sm">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    {item.value}
                  </h2>
                </div>

                <Icon
                  size={32}
                  className="text-cyan-400"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reports */}

      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-2xl font-semibold text-white mb-6">
          Recent Reports
        </h2>

        <div className="space-y-4">

          {reports.slice(0, 5).map((report) => (
            <div
              key={report.id}
              className="flex justify-between items-center border-b border-slate-800 pb-4"
            >
              <div>
                <h3 className="text-white font-medium">
                  {report.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {report.role}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  report.status === "Completed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {report.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
```

## src/pages/DailyProgress.tsx
```typescript
import { useRef, useState } from "react";
import axios from "axios";

const DailyProgress = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedName, setSelectedName] = useState("");
  const [document, setDocument] = useState<File | null>(null);
  const [tasks, setTasks] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");

  const roleMap: Record<string, string> = {
    "Sanjay Kumar": "Developer",
    "Sanjay Siva Kumar": "VLSI",
    "Naveen Sai": "IoT",
    "Saketh Ram": "IoT",
    Rakesh: "PCB",
    Varshith: "PCB",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

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

      alert("Progress Submitted Successfully");

      setTasks("");
      setStatus("");
      setHoursWorked("");
      setDocument(null);
    } catch (error) {
      console.error(error);
      alert("Submission Failed");
    } finally {
      setLoading(false);
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
                  </div>
                )}
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Progress"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DailyProgress;
```

## src/pages/Login.tsx
```typescript
import { useState } from "react";
import { Mail, Lock, Shield } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend API later
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <Shield className="h-10 w-10 text-cyan-400" />
          </div>

          <h1 className="text-4xl font-bold text-white">
            CircuitServe
          </h1>

          <p className="text-slate-400 mt-2">
            Team Management Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold text-white mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin}>

            <div className="relative mb-4">
              <Mail
                className="absolute left-4 top-4 text-slate-500"
                size={20}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="relative mb-6">
              <Lock
                className="absolute left-4 top-4 text-slate-500"
                size={20}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Login;
```

## src/pages/Reports.tsx
```typescript
import { useState } from "react";
const [selectedReport, setSelectedReport] = useState<any>(null);

const reports = [
  {
    id: 1,
    name: "Sanjay Kumar",
    role: "Developer",
    status: "Completed",
    hours: 5,
    date: "18 Jun 2026",
  },
  {
    id: 2,
    name: "Naveen Sai",
    role: "IoT",
    status: "In Progress",
    hours: 4,
    date: "18 Jun 2026",
  },
  {
    id: 3,
    name: "Sanjay Siva Kumar",
    role: "VLSI",
    status: "Completed",
    hours: 6,
    date: "18 Jun 2026",
  },
];

const Reports = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || report.status === filter;

    return matchesSearch && matchesFilter;
  });

  {selectedReport && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 max-w-2xl w-full">

      <h2 className="text-3xl font-bold mb-6">
        Progress Details
      </h2>

      <div className="space-y-4">

        <div>
          <p className="text-slate-400">Name</p>
          <p>{selectedReport.name}</p>
        </div>

        <div>
          <p className="text-slate-400">Role</p>
          <p>{selectedReport.role}</p>
        </div>

        <div>
          <p className="text-slate-400">Status</p>
          <p>{selectedReport.status}</p>
        </div>

        <div>
          <p className="text-slate-400">Hours Worked</p>
          <p>{selectedReport.hours}</p>
        </div>

        <div>
          <p className="text-slate-400">Date</p>
          <p>{selectedReport.date}</p>
        </div>

        <div>
          <p className="text-slate-400">Tasks Completed</p>
          <p>
            Created Hero Section, Daily Progress Page,
            Admin Dashboard and Reports Module.
          </p>
        </div>

        <div>
          <p className="text-slate-400">Tomorrow Plan</p>
          <p>
            Connect MongoDB and Backend APIs.
          </p>
        </div>

      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => setSelectedReport(null)}
          className="bg-red-500 px-5 py-2 rounded-xl"
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Progress Reports
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Member..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex-1"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>
      </div>

      {/* Reports */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-slate-900 border border-slate-700 rounded-2xl p-5"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">
                  {report.name}
                </h3>
```

## src/pages/TeamMembers.tsx
```typescript
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
```

## src/pages/ReportDetails.tsx
```typescript
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
```

## src/pages/Documents.tsx
```typescript
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
```

---

# FRONTEND - LAYOUTS

## src/layouts/AdminLayout.tsx
```typescript
import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
} from "lucide-react";
import { FolderOpen } from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6">

        <h1 className="text-2xl font-bold text-cyan-400 mb-10">
          CircuitServe
        </h1>

        <nav className="space-y-3">

          <Link
            to="/admin"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            to="/team"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Users size={20} />
            Team Members
          </Link>

          <Link
            to="/reports"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <ClipboardList size={20} />
            Reports
          </Link>

          <Link
  to="/documents"
  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
>
  <FolderOpen size={20} />
  Documents
</Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
```

---

# FRONTEND - TYPES & DATA

## src/types/progress.ts
```typescript
export interface Progress {
  id: number;
  name: string;
  role: string;
  status: string;
  hoursWorked: number;
  tasks: string;
  tomorrowPlan: string;
}
```

## src/data/mockReports.ts
```typescript
const reports = [
  {
    id: 1,
    name: "Sanjay Kumar",
    role: "Developer",
    status: "Completed",
    hoursWorked: 6,
    tasks:
      "Developed Daily Progress form and connected frontend routes.",
    tomorrowPlan:
      "Complete authentication and JWT integration.",
  },

  {
    id: 2,
    name: "Naveen Sai",
    role: "IoT",
    status: "Completed",
    hoursWorked: 5,
    tasks:
      "Worked on ESP32 sensor integration and testing.",
    tomorrowPlan:
      "Implement cloud data transmission module.",
  },

  {
    id: 3,
    name: "Rakesh",
    role: "PCB",
    status: "In Progress",
    hoursWorked: 4,
    tasks:
      "Started PCB schematic design for prototype board.",
    tomorrowPlan:
      "Complete PCB routing and footprint verification.",
  },
];

export default reports;
```

---

# FRONTEND - STYLES

## src/index.css
```css
@import "tailwindcss";

body {
  margin: 0;
}
```

## src/App.css
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);
}
```

---

# BACKEND - CONFIGURATION

## backend/package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongodb": "^7.3.0",
    "mongoose": "^9.7.1",
    "multer": "^2.2.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

---

# BACKEND - SERVER

## backend/server.js
```javascript
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const progressRoutes = require("./routes/progressRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
  res.send("CircuitServe Backend Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
```

---

# BACKEND - MODELS

## backend/models/User.js
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "member"],
      default: "member",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
```

## backend/models/Progress.js
```javascript
const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  name: String,
  role: String,
  tasks: String,
  status: String,
  hoursWorked: Number,
  tomorrowPlan: String,
  documentUrl: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Progress", progressSchema);
```

---

# BACKEND - ROUTES

## backend/routes/authRoutes.js
```javascript
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
```

## backend/routes/progressRoutes.js
```javascript
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
```

---

## Project Summary

**Frontend Stack:**
- React 19 with TypeScript
- Vite build tool
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Lucide React for icons
- Axios for HTTP requests

**Backend Stack:**
- Node.js + Express
- MongoDB + Mongoose
- bcryptjs for password hashing
- JWT for authentication
- CORS enabled for cross-origin requests
- Multer for file uploads

**Key Features:**
- User authentication (Login/Register)
- Daily progress tracking form
- Admin dashboard with statistics
- Team members overview
- Progress reports with filtering
- Document management
- Responsive design
- Animated components

---

**End of Documentation**
