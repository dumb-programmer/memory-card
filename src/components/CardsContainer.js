import lodash from "lodash/lodash";
import Card from "./Card";
import "../styles/Cards.css";

const CardsContainer = (props) => {
  const {
    items,
    setItems,
    unchangedItems,
    selectedItems,
    setSelectedItems,
    score,
    setScore,
    highScore,
    setHighScore,
    setWin,
  } = props;

  const onCardClick = (e) => {
    const index = +e.target.parentNode.getAttribute("data-index");
    let present = false;
    for (let i = 0; i < selectedItems.length; i++) {
      if (selectedItems[i].number === index) {
        present = true;
        break;
      }
    }
    if (!present) {
      setSelectedItems((prevState) => [
        ...prevState,
        unchangedItems[index - 1],
      ]);
      setScore(score + 1);
      if (score === items.length - 1) {
        setWin(true);
      }
    } else {
      if (score >= highScore) {
        setHighScore(score);
      }
      setSelectedItems([]);
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

export default CardsContainer;
