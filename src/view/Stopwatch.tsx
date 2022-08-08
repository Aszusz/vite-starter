import { useAppSelector } from "@/app/hooks";
import { selectElapsedSecons } from "@/app/selectors";

const Stopwatch: React.FunctionComponent = () => {
  const seconds = useAppSelector(selectElapsedSecons)

  return (
    <span>
      App is running for <code>{seconds}</code> seconds...
    </span>
  )
}

export default Stopwatch
