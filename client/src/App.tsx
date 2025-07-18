import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import DashboardPage from '@/pages/DashboardPage';
import AssistantDetailPage from '@/pages/AssistantDetailPage';
import AdminPage from '@/pages/AdminPage';
import { AuthProvider } from '@/contexts/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AuthProvider>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/assistant/:id" element={<AssistantDetailPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
            <Toaster />
          </div>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;