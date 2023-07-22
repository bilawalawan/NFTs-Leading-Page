import '../Button/Button.css'
import '../Navbar/Navbar.css'
function Button(btnprop) {
  return(
    <div className='btns '>
        <a href="#" className='pe-4 ps-4 pt-2 pb-2'> <img src={btnprop.src}/> {btnprop.title} </a>
    </div>
  )  
}

export default Button