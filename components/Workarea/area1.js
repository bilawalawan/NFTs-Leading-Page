import workIcon from "../../assets/work Icon.png"
import '../Workarea/Work.css'
function Area1(props) {
    return (
        <div className=" mb-sm-3 col-sm-12 col-md-4 col-lg-4  ">
            <div className="area-detail">
                <div className="row ">
                    <div className="col-sm-6 col-md-12 col-lg-12 text-center">
                        <img src={workIcon} />
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-12">
                        <h4 className="text-white text-center">{props.heading}</h4>
                        <p className="text-white text-center">{props.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Area1;