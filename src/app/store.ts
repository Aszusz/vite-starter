import { applyMiddleware, legacy_createStore } from "redux";

import { customMiddleware } from "@/app/middleware";
import reducer from "@/app/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const enhancer = composeWithDevTools(applyMiddleware(customMiddleware))
export const store = legacy_createStore(reducer, enhancer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
