const ScoreBoard = ({ score, highScore }) => {
  return (
    <div className="scoreboard">
      <p>Score : {score}</p>
      <p>High Score : {highScore}</p>
    </div>
  );
};

export default ScoreBoard;
