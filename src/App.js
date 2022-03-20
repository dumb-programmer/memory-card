import "./App.css";
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selected, setSelected] = useState([]);
  const [win, setWin] = useState(false);

  if (!win) {
    return (
      <div className="App">
        <div className="scoreboard">
          Score : {score} High Score : {highScore}
        </div>
        <Cards
          items={items}
          setItems={setItems}
          selected={selected}
          setSelected={setSelected}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          setWin={setWin}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>You Won!</h1>
      </div>
    );
  }
}

export default App;
