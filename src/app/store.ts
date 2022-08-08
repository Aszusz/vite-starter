import { applyMiddleware, legacy_createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import { customMiddleWare } from "./middleware";
import reducer from "./reducer";

const enhancer = composeWithDevTools(applyMiddleware(customMiddleWare))
export const store = legacy_createStore(reducer, enhancer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
