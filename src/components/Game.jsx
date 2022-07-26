import * as React from "react";
import useGameHook from "../hooks/useGame";
import TeamSelection from "./TeamSelection";
import useWindowSize from "../hooks/useWindowSize";
import Confetti from "react-confetti";

export default function Game() {
  const { game, handleEndGame } = useGameHook();
  const { width, height } = useWindowSize();
  if (game.started) {
    if (game.winner) {
      return (
        <div className="game">
          <div className="game-frame">
            <div className="game-win">
              <Confetti width={width} height={height} />
              <h5 className="game-win-title">¡Tenemos un ganador!</h5>
              <h5
                className="game-win-name"
                style={{ color: game[game.winner].color }}
              >
                {game.winner === "team_one" ? "Equipo 1" : "Equipo 2"}
              </h5>
              <a
                onClick={() => handleEndGame()}
                type="button"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 px-20 py-3.5 mt-10"
              >
                Reiniciar
              </a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="game">
        <div className="game-frame">
          <TeamFrame team={game.team_one} game={game} />
          <TeamFrame team={game.team_two} game={game} />
        </div>
        <GameNavigator />
      </div>
    );
  } else {
    return <TeamSelection />;
  }
}

const GameNavigator = () => {
  const { handleAddPoints, handleRemovePoints } = useGameHook();
  return (
    <div className="game-navigator">
      <div className="game-navigator-item">
        <button
          onClick={() => handleAddPoints("team_one")}
          className="game-navigator-button"
        >
          +
        </button>
        <button
          onClick={() => handleRemovePoints("team_one")}
          className="game-navigator-button"
        >
          -
        </button>
      </div>
      <div className="game-navigator-item">
        <button
          onClick={() => handleAddPoints("team_two")}
          className="game-navigator-button"
        >
          +
        </button>
        <button
          onClick={() => handleRemovePoints("team_two")}
          className="game-navigator-button"
        >
          -
        </button>
      </div>
    </div>
  );
};

const TeamFrame = ({ team, game }) => {
  return (
    <div className="team-frame" style={{ backgroundColor: team.bgcolor }}>
      <div className="team-name">{team.name}</div>
      <div className="team-header" style={{ backgroundColor: team.color }}>
        <h5 className="team-score-header">{team.score}</h5>
      </div>
      <div style={{ width: "95%", display: "flex", justifyContent: "center" }}>
        <Score team={team} game={game} />
      </div>
    </div>
  );
};

/* 
const Score = ({ team, game }) => {
  let score_arr = [];
  for (let i = 0; i < team.score; i++) {
    score_arr.push(
      <div
        key={i + team.color}
        className="score-item"
        style={{
          backgroundColor: team.color,
        }}
      />
    );
  }
  if (score_arr.length > game.duration) {
    //add an item at the position 14 with the class "score-divider"
    score_arr.splice(game.duration, 0, <div className="score-divider" />);
  }
  return <div className="score-container"> {score_arr} </div>;
};
*/

const Score = ({ team, game }) => {
  const borderSize = "15px solid",
    borderColor = team.color;
  const border = `${borderSize} ${borderColor}`;
  const cubeMapping = {
    map: {
      0: { border: "15px solid transparent" },
      1: { borderTop: border },
      2: { borderTop: border, borderLeft: border },
      3: {
        borderTop: border,
        borderLeft: border,
        borderBottom: border,
      },
      4: {
        borderTop: border,
        borderLeft: border,
        borderBottom: border,
        borderRight: border,
      },
      5: { border: border },
    },
  };

  const renderCubes = () => {
    if (team.score <= 5) {
      return (
        <div className="score-container">
          <div className="score-item" style={cubeMapping.map[team.score]}>
            {team.score === 5 && (
              <div
                className="score-line"
                style={{ backgroundColor: team.color, width: borderSize }}
              ></div>
            )}
          </div>
        </div>
      );
    }
    if (team.score > 5 && team.score <= 10) {
      return (
        <div className="score-container">
          <div className="score-item" style={cubeMapping.map[5]}>
            <div
              className="score-line"
              style={{ backgroundColor: team.color, width: borderSize }}
            ></div>
          </div>
          <div className="score-item" style={cubeMapping.map[team.score - 5]}>
            {team.score === 10 && (
              <div
                className="score-line"
                style={{ backgroundColor: team.color, width: borderSize }}
              ></div>
            )}
          </div>
        </div>
      );
    }
    if (team.score > 10 && team.score <= 15) {
      return (
        <div className="score-container">
          <div className="score-item" style={cubeMapping.map[5]}>
            <div
              className="score-line"
              style={{ backgroundColor: team.color, width: borderSize }}
            ></div>
          </div>
          <div className="score-item" style={cubeMapping.map[5]}>
            <div
              className="score-line"
              style={{ backgroundColor: team.color, width: borderSize }}
            ></div>
          </div>
          <div className="score-item" style={cubeMapping.map[team.score - 10]}>
            {team.score === 15 && (
              <div
                className="score-line"
                style={{ backgroundColor: team.color, width: borderSize }}
              ></div>
            )}
          </div>
        </div>
      );
    }
    if (team.score > 15 && team.score <= 20) {
      return (
        <div className="score-container">
          <div className="score-item" style={cubeMapping.map[5]}>
            <div
              className="score-line"
              style={{ backgroundColor: team.color, width: borderSize }}
            ></div>
          </div>
          <div className="score-item" style={cubeMapping.map[5]}>
            <div
              className="score-line"
              style={{ backgroundColor: team.color, width: borderSize }}
            ></div>
          </div>
          <div className="score-item" style={cubeMapping.map[5]}>
            <div
              className="score-line"
              style={{ backgroundColor: team.color, width: borderSize }}
            ></div>
          </div>
          <div className="score-item" style={cubeMapping.map[team.score - 15]}>
            {team.score === 20 && (
              <div
                className="score-line"
                style={{ backgroundColor: team.color, width: borderSize }}
              ></div>
            )}
          </div>
        </div>
      );
    }
  };

  return renderCubes();
};
