import { State } from "@/app/state";
import { elapsedSeconds } from "@/model/stopwatch";

export const selectElapsedSecons = (state: State) =>
  elapsedSeconds(state.stopwatch)

export const selectCount = (state: State) => state.counter.count
