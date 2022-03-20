import lodash from "lodash/lodash";

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
    const index = +e.target.getAttribute("data-index");
    let present = false;
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === index) {
        present = true;
        break;
      }
    }
    if (!present) {
      setSelected((prevState) => [...prevState, index]);
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
      {items.map((number, i) => (
        <div className="card" key={i} data-index={number} onClick={onCardClick}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Cards;
