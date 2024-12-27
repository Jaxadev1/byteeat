import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import "./assets/styles/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
