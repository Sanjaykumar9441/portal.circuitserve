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
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
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
      <Route
        path="/daily-progress"
        element={
          <ProtectedRoute>
            <DailyProgress />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes Block */}
      <Route
        element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/:id" element={<ReportDetails />} />
        <Route path="/documents" element={<Documents />} />
      </Route>
    </Routes>
  );
}

export default App;
