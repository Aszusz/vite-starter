import clsx from 'clsx'
import tw from 'tw-tailwind'

import { Tab } from '@headlessui/react'

export interface IProps {
  children: React.ReactNode
}

export default function StyledTab(props: IProps) {
  const baseStyle = tw`px-3 py-6 m-2 text-xs font-medium leading-tight uppercase rounded focus:outline-none focus:ring-0`
  const selectedStyle = tw`font-bold text-black bg-zinc-200`
  const unselectedStyle = tw`text-white bg-zinc-700`

  return (
    <Tab
      className={({ selected }) =>
        clsx(baseStyle, selected ? selectedStyle : unselectedStyle)
      }
    >
      {props.children}
    </Tab>
  )
}
