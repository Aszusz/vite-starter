import { elapsedSeconds } from "@model/stopwatch";

import { State } from "./state";

export const selectElapsedSecons = (state: State) =>
  elapsedSeconds(state.stopwatch)

export const selectCount = (state: State) => state.counter.count
