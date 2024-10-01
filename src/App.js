import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <main className="flex flex-col min-h-screen" data-testid="main-spa">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
