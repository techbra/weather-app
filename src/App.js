import "./App.css";
import Container from "./Components/Container";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;