import { createContext, useContext, useState } from "react";
import ErrorCard from "../components/ui/ErrorCard";

const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ setError }}>
      {children}
      <ErrorCard error={error} onClose={() => setError(null)} />
    </ErrorContext.Provider>
  );
}

export function useError() {
  return useContext(ErrorContext);
}
