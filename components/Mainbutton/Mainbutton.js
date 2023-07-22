import '../Mainbutton/Mainbutton.css'

function Mainbutton(btnprop) {
  return(
    <div className='btns1 '>
      <button>  <a href="#" className='pe-4 ps-4 pt-2 pb-2'> <img src={btnprop.src}/> {btnprop.title} </a></button>
    </div>
  )  
}

export default Mainbutton