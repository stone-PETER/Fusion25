import Heading from "../../components/Heading"
import SessionsCard from "./SessionsCard"
import ContainerBox from "../../components/ContainerBox"

const Session = () => {
  return (
    <div className="bg-black py-10 overflow-hidden">
        <Heading heading="sessions"/>
        <ContainerBox>
          <SessionsCard />
      </ContainerBox>

    </div>
  )
}
export default Session