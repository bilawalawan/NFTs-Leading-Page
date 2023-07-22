import "../Collectioncard/Collectioncard.css"
function Collectioncard(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card-body">
                <img src={props.src} />
                <div className="card-pic d-flex mt-2 ">
                    <div className="card-pics me-2">
                        <img src={props.src2} />
                    </div>
                    <div className="card-pics">
                        <img src={props.src3} />
                    </div>
                    <div className="card-text ms-2">
                        <p>{props.title}</p>
                    </div>
                </div>
                <div className="owner">
                    <p className="fw-bold text-white mt-2 mb-0">{props.title2}</p>
                    <img src={props.src4} /><span className=" text-white ms-2 fs-7">{props.owner}</span>
                </div>
            </div>
        </div>
    )
}

export default Collectioncard;