import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Spinner from "../../common/spinner";

export default function ProtectedRoute({
  children,
  requireOnboarding = false,
  requireLockedUniversity = false,
}) {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-6"><Spinner /></div>;

  if (!user) return <Navigate to="/login" />;

  const profileComplete =
    user.profileComplete ?? user.user?.profileComplete;

  if (requireOnboarding && !profileComplete) {
    return <Navigate to="/onboarding" />;
  }

  const hasLockedUniversity =
    user.lockedUniversity ||
    user.user?.lockedUniversity ||
    user.stage === "Preparing Applications";

  if (requireLockedUniversity && !hasLockedUniversity) {
    return <Navigate to="/university" />;
  }

  return children;
}
