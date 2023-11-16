import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Home from "./features/home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer>Footer</Footer>
    </DarkModeProvider>
  );
}

export default App;
