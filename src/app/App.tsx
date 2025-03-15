import { queryClient } from '../shared/api/queryClient';
import './App.css';
import { AppRouter } from './providers/AppRouter';
import { QueryProvider } from './providers/QueryProvider';

function App() {
  return (
    <QueryProvider client={queryClient}>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
