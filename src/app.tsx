import { ThemeProvider } from "./components/theme-provider";
import { AppRoutes } from "./routes/router";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ticket-system-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}
