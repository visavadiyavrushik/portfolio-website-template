import { ThemeProvider } from "@mui/styles";
import "./App.css";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import AppThemes from "./theme/Index";

function App() {
  return (
    <>
      <ThemeProvider theme={AppThemes}>
        {/* <Navbar /> */}
        <Home />
        <About />
        {/* <Contact /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
