import Counter from '@/view/Counter'
import Stopwatch from '@/view/Stopwatch'
import StyledTab from '@/view/StyledTab'
import { Tab } from '@headlessui/react'

function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Tab.Group>
        <Tab.List className="flex flex-col p-4 w-80 text-white bg-zinc-800">
          <StyledTab>Tab 1</StyledTab>
          <StyledTab>Tab 2</StyledTab>
          <StyledTab>Tab 3</StyledTab>
        </Tab.List>
        <Tab.Panels className="p-4 w-full bg-zinc-100">
          <Tab.Panel>
            <Stopwatch />
          </Tab.Panel>
          <Tab.Panel>
            <Counter />
          </Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default App
