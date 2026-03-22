
import Navbar from "./NavBar"
import Page1content from "./Page1content"
function Section1(props) {
  return (
    <div className='h-screen w-full flex flex-col'>
        <Navbar/>
        <Page1content data = {props.data}/>
    </div>
  )
}

export default Section1