const ScoreBoard = ({ score, highScore }) => {
  return (
    <div className="scoreboard">
      Score : {score} High Score : {highScore}
    </div>
  );
};

export default ScoreBoard;
