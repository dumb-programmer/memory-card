import "./styles/App.css";
import { useState } from "react";
import uniqid from "uniqid";
import CardsContainer from "./components/CardsContainer";
import ScoreBoard from "./components/ScoreBoard";
import WinnerScreen from "./components/WinnerScreen";
import Po from "./assets/images/Po.jpeg";
import MrPing from "./assets/images/MrPing.jpeg";
import Shifu from "./assets/images/Shifu.jpeg";
import Tigress from "./assets/images/Tigress.jpeg";
import Monkey from "./assets/images/Monkey.jpeg";
import Mantis from "./assets/images/Mantis.jpeg";
import Kai from "./assets/images/Kai.jpeg";
import Oogway from "./assets/images/Oogway.jpeg";
import Tai_Lung from "./assets/images/Tai_Lung.jpeg";
import Lord_Shen from "./assets/images/Lord_Shen.jpeg";

const App = () => {
  const unchangedItems = [
    { id: uniqid(), number: 1, name: "Po", path: Po },
    { id: uniqid(), number: 2, name: "Mr Ping", path: MrPing },
    { id: uniqid(), number: 3, name: "Shifu", path: Shifu },
    { id: uniqid(), number: 4, name: "Tigress", path: Tigress },
    { id: uniqid(), number: 5, name: "Monkey", path: Monkey },
    { id: uniqid(), number: 6, name: "Mantis", path: Mantis },
    { id: uniqid(), number: 7, name: "Kai", path: Kai },
    { id: uniqid(), number: 8, name: "Oogway", path: Oogway },
    { id: uniqid(), number: 9, name: "Tai Lung", path: Tai_Lung },
    { id: uniqid(), number: 10, name: "Lord Shen", path: Lord_Shen },
  ];
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [items, setItems] = useState([...unchangedItems]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [win, setWin] = useState(false);

  if (!win) {
    return (
      <div className="App">
        <ScoreBoard score={score} highScore={highScore} />
        <CardsContainer
          items={items}
          setItems={setItems}
          unchangedItems={unchangedItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
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
        <WinnerScreen />
      </div>
    );
  }
};

export default App;
