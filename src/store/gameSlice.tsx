import { createSlice } from "@reduxjs/toolkit";

interface IGameState {
  destroyed: number;
  step: number;
  timeLeft: number;
}

const initialState: IGameState = {
  destroyed: 0,
  step: 0,
  timeLeft: 30,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    addDestroyedNlo(state) {
      state.destroyed = state.destroyed + 1;
    },
    resetGame(state) {
      state.destroyed = 0;
      state.timeLeft = 30;
      state.step = 0;
    },
    timeChange(state) {
      state.timeLeft = state.timeLeft - 1;
    },
    missClickNlo(state) {
      state.destroyed = state.destroyed > 0 ? state.destroyed - 1 : 0;
    },
    nextStep(state) {
      state.step += 1;
    },
  },
});

export const {
  addDestroyedNlo,
  missClickNlo,
  nextStep,
  resetGame,
  timeChange,
} = gameSlice.actions;
export default gameSlice.reducer;
