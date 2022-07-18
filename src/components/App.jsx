import "../styles/App.css";
import TeamSelection from "./TeamSelection";
import Navigator from "./Partials/Navigator";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Game />
    </div>
  );
}

export default App;
