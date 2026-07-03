import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ToastViewport } from "../layout/ToastViewport";

const ToastContext = createContext({ pushToast: () => {} });

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const pushToast = useCallback((message) => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, message }]);
  }, []);

  useEffect(() => {
    if (!toasts.length) return undefined;
    const timer = window.setTimeout(() => {
      setToasts((current) => current.slice(1));
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [toasts]);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
