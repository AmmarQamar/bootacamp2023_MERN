import Weather from './components/Weather';
import { QueryClient, QueryClientProvider } from 'react-query';
import ParentComponent from './components/Assignment7/ParentComponent';
const queryClient = new QueryClient()
function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <Weather />
    // </QueryClientProvider>
    <>
      <ParentComponent />
    </>
  );
}

export default App;
