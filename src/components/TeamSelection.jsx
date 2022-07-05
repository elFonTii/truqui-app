import React from "react";
import { TwitterPicker } from "react-color";
import useGameHook from "../hooks/useGame";

export default function TeamSelection() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { game, handleSetDuration, handleStartGame } = useGameHook();

  let label = "";
  isChecked ? (label = 20) : (label = 15);

  const startGame = () => {
    //add a timeout to simulate a loading state
    setIsLoading(true);
    setTimeout(() => {
      handleStartGame();
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div className="container">
      {isLoading && (
        <div className="loader">
          <div className="lds-circle">
            <div></div>
          </div>
        </div>
      )}
      <h1 className="title">Asignando colores</h1>
      <TeamSelector
        title="Nosotros"
        teamName="team_one"
        color={game.team_one.color}
      />
      <TeamSelector
        title="Ellos"
        teamName="team_two"
        color={game.team_two.color}
      />
      <h4 className="title">Duración de la partida</h4>
      <label
        htmlFor="green-toggle"
        className="inline-flex relative items-center mr-5 cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="green-toggle"
          className="sr-only peer"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        ></input>
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label} puntos
        </span>
      </label>
      <button
        onClick={startGame}
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 px-20 py-3.5 mt-10"
      >
        Iniciar
      </button>
    </div>
  );
}

const TeamSelector = ({ title, teamName, color }) => {
  const { handleSetColor } = useGameHook();
  const colors = [
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#8ED1FC",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
    "#9900EF",
  ];
  return (
    <div className="team">
      <h4 className="title">{title}</h4>
      <TwitterPicker
        triangle="hide"
        width="205px"
        color={colors}
        onChange={color => handleSetColor(teamName, color.hex)}
      />
      <div style={{ backgroundColor: color }} className="team-color mt-2"></div>
    </div>
  );
};
