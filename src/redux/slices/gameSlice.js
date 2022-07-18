import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    started: false,
    duration: 15,
    team_one: {
        color: "#7BDCB5",
        score: 0,
    },
    team_two: {
        color: "#EB144C",
        score: 0,
    },
    winner: null,
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        addPoint: (state, action) => {
            const { team } = action.payload;
            if (state[team].score >= 0 && state[team].score < state.duration * 2) {
                state[team].score++;
            }

            if (state[team].score === state.duration * 2) {
                state[team].score = 0;
                state.winner = team;
            }
        },
        removePoint: (state, action) => {
            const { team } = action.payload;
            if (state[team].score > 0 && state[team].score <= state.duration * 2) {
                state[team].score--;
            }
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
        },
        endGame: (state) => {
            state.started = false;
            state.duration = initialState.duration;
            state.team_one.score = 0;
            state.team_two.score = 0;
            state.team_one.color = initialState.team_one.color;
            state.team_two.color = initialState.team_two.color;
            state.winner = null;
        }
    },
});

export const { addPoint, removePoint, setColor, setDuration, startGame, endGame } = gameSlice.actions;

export default gameSlice.reducer;
