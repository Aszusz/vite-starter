import '@/app/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '@/app/store'
import App from '@/view/App'
import { uiEventCreators } from '@/view/ui-events'

store.dispatch(uiEventCreators.APP_STARTED())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
