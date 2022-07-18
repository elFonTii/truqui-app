import { useSelector, useDispatch } from "react-redux";
import { addPoint, removePoint, setColor, setDuration, startGame, endGame } from "../redux/slices/gameSlice";

export default function useGameHook() {
    const game = useSelector(state => state.game);
    const dispatch = useDispatch();

    const handleAddPoints = team => {
        dispatch(addPoint({ team }));
    }

    const handleRemovePoints = team => {
        dispatch(removePoint({ team }));
    }

    const handleSetColor = (team, color) => {
        dispatch(setColor({ team, color }));
    }

    const handleSetDuration = duration => {
        dispatch(setDuration({ duration }));
    }

    const handleStartGame = () => {
        dispatch(startGame());
    }

    const handleEndGame = () => {
        dispatch(endGame());
    }

    return { game, handleAddPoints, handleRemovePoints, handleSetColor, handleSetDuration, handleStartGame, handleEndGame };

}