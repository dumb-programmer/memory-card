import "../styles/Card.css";

const Card = ({ number, name, path, onCardClick }) => {
  return (
    <div className="card" data-index={number} onClick={onCardClick}>
      <img src={path} alt={name} className="card-img" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
