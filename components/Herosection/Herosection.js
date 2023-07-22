
import rocket from "../../assets/RocketLaunch.png"
import Detailscount from "../Detailscount/Detailscount";
import Mainbutton from "../Mainbutton/Mainbutton";
import spaceman from "../../assets/space-walking.png";
import '../Herosection/Herosection.css'
import animakid from "../../assets/Avatar.png"

function Herosection(props) {
    return (
        <section className=" container hero-section  ">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-6 ">
                    <div className="details">
                        <h1 className="text-white mb-3">Discover Digital Art & Collect NFTs</h1>
                        <p className="text-white mb-5">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from
                            more than 20k NFT artists
                        </p>
                        <Mainbutton src={rocket} title='Get Started'></Mainbutton>
                    </div>
                    <div className="count-detail">
                        <div className="row d-flex mt-3">
                            <Detailscount num='240k+' title='Total Sale'></Detailscount>
                            <Detailscount num='100k+' title='Auction'></Detailscount>
                            <Detailscount num='240k+' title='Artists'></Detailscount>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6 mb-3 m">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 hero-cardimg">
                            <img src={spaceman} />
                        </div>
                    </div>

                    <div className="row hero-card  ">
                        <p className="text-white">Space Walking</p>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src={animakid} /> <span className="ms-2 text-white">Animakid</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection