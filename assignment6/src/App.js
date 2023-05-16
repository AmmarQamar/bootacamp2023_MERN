import Weather from './components/Weather';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>

  );
}

export default App;
