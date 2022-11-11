import { Dispatch, MiddlewareAPI } from 'redux'

import { fxEventCreators } from '@/api/fx-events'
import { delay, getCurrentTime } from '@/api/time'
import { Events, eventTypes } from '@/app/events'
import { randomInteger } from '@/api/rnd'

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

      case eventTypes['MINUS_RND_BUTTON_CLICKED']: {
        const rnd = randomInteger(1, 10)
        await delay(rnd * 200)
        store.dispatch(fxEventCreators.MINUS_RND_WAIT_DONE(rnd))
        return result
      }

      case eventTypes['PLUS_RND_BUTTON_CLICKED']: {
        const rnd = randomInteger(1, 10)
        await delay(rnd * 200)
        store.dispatch(fxEventCreators.PLUS_RND_WAIT_DONE(rnd))
        return result
      }

      default:
        return result
    }
  }
