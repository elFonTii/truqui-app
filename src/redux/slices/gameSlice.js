import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    started: false,
    
    duration: 15,
    team_one: {
        tag: "Nosotros",
        color: "#7BDCB5",
        score: 0,
        isInGood: false,
        bgcolor: "#fff",
    },
    team_two: {
        tag: "Ellos",
        color: "#EB144C",
        score: 0,
        isInGood: false,
        bgcolor: "#fff",
    },
    winner: null,
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        addPoint: (state, action) => {
            const team = state[action.payload.team];
            if (team.score >= 0 && team.score <= state.duration) {
                team.score++;
                if (team.score === state.duration && !team.isInGood) {
                    team.isInGood = true;
                    team.bgcolor = "#DDFFD4";
                    team.score = 0;
                }

                if(team.score === state.duration && team.isInGood){
                    state.winner = action.payload.team;
                }

            }
        },
        removePoint: (state, action) => {
            const team = state[action.payload.team];
            if (team.score > 0 && team.score <= state.duration) {
                team.score--;
                if (team.score === state.duration && !team.isInGood) {
                    team.isInGood = true;
                    team.bgcolor = "#DDFFD4";
                    team.score = 0;
                }

                if(team.score === state.duration && team.isInGood){
                    state.winner = action.payload.team;
                }

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
            state.team_one.isInGood = false;
            state.team_two.isInGood = false;
            state.team_one.bgcolor = initialState.team_one.bgcolor;
            state.team_two.bgcolor = initialState.team_two.bgcolor;
            state.winner = null;
        }
    },
});

export const { addPoint, removePoint, setColor, setDuration, startGame, endGame } = gameSlice.actions;

export default gameSlice.reducer;
