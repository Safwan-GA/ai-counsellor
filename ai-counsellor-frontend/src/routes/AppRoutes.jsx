import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const Landing = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Onboarding = lazy(() => import("../pages/Onboarding"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Counsellor = lazy(() => import("../pages/Counsellor"));
const Universities = lazy(() => import("../pages/Universities"));
const Tasks = lazy(() => import("../pages/Tasks"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requireOnboarding>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/counsellor"
        element={
          <ProtectedRoute requireOnboarding>
            <Counsellor />
          </ProtectedRoute>
        }
      />

      <Route
        path="/universities"
        element={
          <ProtectedRoute requireOnboarding>
            <Universities />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute requireOnboarding requireLockedUniversity>
            <Tasks />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
