import { Dispatch, MiddlewareAPI } from "redux";

import { fxEventCreators, FxEvents } from "@api/fxEvents";
import { delay, getCurrentTime } from "@api/time";
import { UiEvents, uiEventTypes } from "@view/uiEvents";

export const customMiddleWare =
  (store: MiddlewareAPI<Dispatch<UiEvents | FxEvents>>) =>
  (next: Dispatch<UiEvents | FxEvents>) =>
  async (event: UiEvents): Promise<UiEvents> => {
    const result = next(event)

    switch (event.type) {
      case uiEventTypes['APP_STARTED']: {
        const time = getCurrentTime()
        store.dispatch(fxEventCreators.APP_STARTED_DETAILS(time))
        setInterval(() => {
          store.dispatch(fxEventCreators.GOT_TIME(getCurrentTime()))
        }, 47)
        return result
      }

      case uiEventTypes['LARGE_DECREMENT_BUTTON_CLICKED']: {
        await delay(1000)
        store.dispatch(fxEventCreators.LARGE_DECREMENT_WAIT_COMPLETED(3))
        return result
      }

      case uiEventTypes['LARGE_INCREMENT_BUTTON_CLICKED']: {
        await delay(1000)
        store.dispatch(fxEventCreators.LARGE_INCREMENT_WAIT_COMPLETED(3))
        return result
      }

      default:
        return result
    }
  }
