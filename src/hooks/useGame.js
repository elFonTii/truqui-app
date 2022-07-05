import { useSelector, useDispatch } from "react-redux";
import { addPoint, setColor, setDuration, startGame } from "../redux/slices/gameSlice";

export default function useGameHook() {
    const game = useSelector(state => state.game);
    const dispatch = useDispatch();

    const handleAddPoints = team => {
        dispatch(addPoint(team));
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

    return { game, handleAddPoints, handleSetColor, handleSetDuration, handleStartGame };

}