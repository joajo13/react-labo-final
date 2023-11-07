import { QueryClient, QueryClientProvider } from "react-query";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <AppRouter />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
