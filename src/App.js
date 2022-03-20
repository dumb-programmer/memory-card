import "./styles/App.css";
import { useState } from "react";
import Cards from "./components/Cards";
import uniqid from "uniqid";
import cat1 from "./images/cat1.jpeg";
import cat2 from "./images/cat2.jpeg";
import cat3 from "./images/cat3.jpeg";
import cat4 from "./images/cat4.jpeg";
import cat5 from "./images/cat5.jpeg";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [items, setItems] = useState([
    { id: uniqid(), number: 1, name: "Cat 1", path: cat1 },
    { id: uniqid(), number: 2, name: "Cat 2", path: cat2 },
    { id: uniqid(), number: 3, name: "Cat 3", path: cat3 },
    { id: uniqid(), number: 4, name: "Cat 4", path: cat4 },
    { id: uniqid(), number: 5, name: "Cat 5", path: cat5 },
  ]);
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
