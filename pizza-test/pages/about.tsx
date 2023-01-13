import { UserName } from "@smartive-education/pizza-hawaii"
import SimpleNav from "./simpleNav"


const about = () => {

  return (
    <div>
    <SimpleNav />
    <UserName href="https://jondoe.com" > Hi I am John Doe</UserName>
    <UserName href="https://janedoe.com" > Hi I am Jane Doe</UserName>
    </div>
  )
}

export default about