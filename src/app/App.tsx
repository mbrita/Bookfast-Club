import { queryClient } from '@/shared/api/queryClient';
import './App.css';
import { AppRouter } from './providers/AppRouter';
import { QueryProvider } from './providers/QueryProvider';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/shared/config/theme/Theme';

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
