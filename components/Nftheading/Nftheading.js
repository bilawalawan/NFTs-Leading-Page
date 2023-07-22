import '../Creatoritem/Creatoritem.css'
function Nftheading(props) {
    return (
        <div className="row ">
            <div className="col-lg-10 col-md-8">
                <h1 className="text-white">{props.title}</h1>
                <p className="text-white">{props.para}</p>

            </div>
            <div className="col-lg-2 col-md-4 ">
                <button className="headingbtn mt-4 ps-2"><img className='me-2 mt-1' src={props.src} /> {props.text}</button>
            </div>
        </div>
    )
}

export default Nftheading;