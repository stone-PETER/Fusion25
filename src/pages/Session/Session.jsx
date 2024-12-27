import Heading from "../../components/Heading"
import SessionsCard from "./SessionsCard"

const Session = () => {
  return (
    <div className="bg-black py-10 overflow-hidden">
        <Heading heading="sessions"/>
        <SessionsCard/>
    </div>
  )
}
export default Session