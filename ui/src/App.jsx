import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Home from "./features/home/Home";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
      <Home />
      <footer>Footer</footer>
    </DarkModeProvider>
  );
}

export default App;
