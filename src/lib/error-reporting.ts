type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Log error to console in development
  if (import.meta.env.DEV) {
    console.error("Error caught:", error, context);
  }

  // You can add custom error reporting logic here
  // For example, send to Sentry, LogRocket, or other error tracking services
}
