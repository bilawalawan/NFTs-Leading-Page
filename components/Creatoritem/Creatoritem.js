import '../Creatoritem/Creatoritem.css'
function Creatorsitem(props) {
    return (
        <div className="col-md-6 col-lg-3 mb-2 pe-2">
            <div className="creator-card ">
                <div className='row'>
                    <div className=' col-sm-6 col-md-6 col-lg-12 mt-3'>
                        <img src={props.src1} />
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-12 mt-4'>
                        <h4 className="text-white fs-5 ">{props.creatorname}</h4>
                        <p className="text-white  "><span className=''>Total Sales: </span>34.53 ETH</p>
                    </div>
                </div>
                {/* <div className='row'>
                   
                </div> */}
                <div className="num">
                    <p>{props.num}</p>
                </div>
            </div>
        </div>
    )
}

export default Creatorsitem;