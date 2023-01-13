import { Button } from "@smartive-education/pizza-hawaii"
import SimpleNav from "../simpleNav"

const Atoms = () =>{
  
  return (
    <>
    <SimpleNav />
    <h1>Button Component</h1>
    <Button size='M' as='button' color='violet' icon='mumble' >icon Name:</Button>
    </>
  )
}

export default Atoms
