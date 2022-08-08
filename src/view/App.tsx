import { Tab } from "@headlessui/react";

import Counter from "./Counter";
import Stopwatch from "./Stopwatch";
import StyledTab from "./StyledTab";

function App() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Tab.Group>
        <Tab.List className="flex flex-col p-4 text-white w-80 bg-zinc-800">
          <StyledTab>Tab 1</StyledTab>
          <StyledTab>Tab 2</StyledTab>
          <StyledTab>Tab 3</StyledTab>
        </Tab.List>
        <Tab.Panels className="w-full p-4 bg-zinc-100">
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
