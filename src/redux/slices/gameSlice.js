import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    started: false,
    duration: 15,
    team_one: {
        color: "#7BDCB5",
        points: 0,
    },
    team_two: {
        color: "#EB144C",
        points: 0,
    }

};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        addPoint: (state, action) => {
            const { team } = action.payload;
            state[team].points++;
        },
        setColor: (state, action) => {
            const { team, color } = action.payload;
            state[team].color = color;
        },
        setDuration: (state, action) => {
            const { duration } = action.payload;
            state.duration = duration;
        },
        startGame: (state) => {
            state.started = true;
        }
    },
});

export const { addPoint, setColor, setDuration, startGame } = gameSlice.actions;

export default gameSlice.reducer;
