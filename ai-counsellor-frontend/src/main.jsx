import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ErrorProvider } from "./context/ErrorContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Spinner from "./common/spinner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ErrorProvider> {/* ✅ Added ErrorProvider here */}
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <App />
            </Suspense>
          </ErrorBoundary>
        </ErrorProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
