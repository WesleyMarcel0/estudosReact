import { AuthProvider } from "./provaiders/AutoProvider";
import { RoutesMain } from "./routes"
import { Global } from "./styles/GlobalStyle";


function App() {
  

  return (
    <>
      <Global />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
    
  );
};

export default App
