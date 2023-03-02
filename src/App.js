import "./App.css";
import Container from "./Components/Container";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";
import Nabvar from "./Components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Nabvar />
        <Container />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;