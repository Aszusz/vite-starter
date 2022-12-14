import tw from 'tw-tailwind'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectCount } from '@/app/selectors'
import { uiEventCreators } from '@/view//ui-events'

const Counter = () => {
  const containerStyle = tw`p-4 rounded-lg bg-slate-700 w-fit`
  const buttonStyle = tw`px-3 py-2 text-2xl font-bold text-blue-300 hover:text-white`
  const displayStyle = tw`inline-block px-3 py-2 mx-3 text-2xl font-bold text-white bg-blue-500 rounded`

  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div className={containerStyle}>
      <button
        className={buttonStyle}
        onClick={() => dispatch(uiEventCreators.MINUS_RND_BUTTON_CLICKED())}
      >
        --
      </button>

      <button
        className={buttonStyle}
        onClick={() => dispatch(uiEventCreators.MINUS_ONE_BUTTON_CLICKED())}
      >
        -
      </button>

      <span className={displayStyle}>{count}</span>

      <button
        className={buttonStyle}
        onClick={() => dispatch(uiEventCreators.PLUS_ONE_BUTTON_CLICKED())}
      >
        +
      </button>

      <button
        className={buttonStyle}
        onClick={() => dispatch(uiEventCreators.PLUS_RND_BUTTON_CLICKED())}
      >
        ++
      </button>
    </div>
  )
}

export default Counter
