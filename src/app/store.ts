import { applyMiddleware, legacy_createStore } from 'redux'

import { effects } from '@/app/effects'
import update from '@/app/update'
import { composeWithDevTools } from '@redux-devtools/extension'

const composeEnhancers = composeWithDevTools({ actionsDenylist: ['^_.*'] })
export const store = legacy_createStore(
  update,
  composeEnhancers(applyMiddleware(effects))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
