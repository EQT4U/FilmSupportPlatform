import { Router, Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/theme-provider';
import HomePage from '@/pages/HomePage';
import FilmPage from '@/pages/FilmPage';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="cinema-theme">
        <Router>
          <Route path="/" component={HomePage} />
          <Route path="/film/:id" component={FilmPage} />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;