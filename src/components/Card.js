import "../styles/Card.css";

const Card = (props) => {
  const { number, name, path, onCardClick } = props;
  return (
    <div className="card" data-index={number} onClick={onCardClick}>
      <img src={path} alt={name} className="card-img" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
