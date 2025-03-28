import { queryClient } from '@/shared/api';
import './App.css';
import { AppRouter } from './providers/AppRouter';
import { QueryProvider } from './providers/QueryProvider';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/shared/config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryProvider client={queryClient}>
        <AppRouter />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default App;
