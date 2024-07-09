import ClockHeading from "./components/clockHeading";
import ClockMoto from "./components/clockMoto";
import CurrentTime from "./components/currentTime";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockMoto></ClockMoto>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
