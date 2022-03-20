import lodash from "lodash/lodash";
import Card from "./Card";
import "../styles/Cards.css";

const Cards = (props) => {
  const {
    items,
    setItems,
    selected,
    setSelected,
    score,
    setScore,
    highScore,
    setHighScore,
    setWin,
  } = props;

  const onCardClick = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    console.log(index);
    let present = false;
    for (let i = 0; i < selected.length; i++) {
      console.log(selected);
      if (selected[i].number === index) {
        present = true;
        console.log(`Present`);
        break;
      }
    }
    if (!present) {
      setSelected((prevState) => [...prevState, items[index - 1]]);
      setScore(score + 1);
      if (score === items.length - 1) {
        setWin(true);
      }
    } else {
      if (score >= highScore) {
        setHighScore(score);
      }
      setSelected([]);
      setScore(0);
    }
    setItems(lodash.shuffle(items));
  };

  return (
    <div className="card-container">
      {items.map((item) => (
        <Card
          number={item.number}
          name={item.name}
          path={item.path}
          key={item.id}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default Cards;
