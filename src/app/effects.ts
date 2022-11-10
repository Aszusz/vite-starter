import { Dispatch, MiddlewareAPI } from 'redux'

import { fxEventCreators } from '@/api/fx-events'
import { delay, getCurrentTime } from '@/api/time'
import { Events, eventTypes } from '@/app/events'

export const effects =
  (store: MiddlewareAPI<Dispatch<Events>>) =>
  (next: Dispatch<Events>) =>
  async (event: Events): Promise<Events> => {
    const result = next(event)

    switch (event.type) {
      case eventTypes['APP_STARTED']: {
        const time = getCurrentTime()
        store.dispatch(fxEventCreators.APP_STARTED_DETAILS(time))
        setInterval(() => {
          store.dispatch(fxEventCreators._GOT_TIME(getCurrentTime()))
        }, 47)
        return result
      }

      case eventTypes['LARGE_DECREMENT_BUTTON_CLICKED']: {
        await delay(1000)
        store.dispatch(fxEventCreators.LARGE_DECREMENT_WAIT_COMPLETED(3))
        return result
      }

      case eventTypes['LARGE_INCREMENT_BUTTON_CLICKED']: {
        await delay(1000)
        store.dispatch(fxEventCreators.LARGE_INCREMENT_WAIT_COMPLETED(3))
        return result
      }

      default:
        return result
    }
  }
