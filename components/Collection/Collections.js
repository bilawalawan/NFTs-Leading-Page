import Collectioncard from "../Collectioncard/Collectioncard";
import animalImg from "../../assets/animal main.png"
import animalpic1 from "../../assets/cat.png"
import animalpic2 from "../../assets/bear.png"
import avatarlogo from "../../assets/Mrfox.png"

import mashroomeImg from "../../assets/main Mashroom.png"
import mashroom1 from "../../assets/mashroome 1.png"
import avatarlogo2 from "../../assets/shroomine.png"

import robotimg from "../../assets/main Rebbot.png"
import robot1 from "../../assets/Secondary Roboot.png"
import avatarlogo3 from "../../assets/BeKindReboot.png"



function Collections(props) {
    return (
        <div className="container mt-5 ">
            <div className="row mb-3 ">
                <div className="col">
                <h1 className="text-white">Trending Collection</h1>
                <p className="fw-bold text-white ">Checkout Our Weekly Uploaded Trending Collection</p>
                </div>
                
            </div>
            <div className="row p-3">
                <Collectioncard src={animalImg} src2={animalpic1} src3={animalpic2} title ="1024+" title2 = "DSGN Animal" src4={avatarlogo} owner ="MrFox"/>
                <Collectioncard src={mashroomeImg} src2={mashroom1} src3={mashroom1} title ="1024+" title2 = "Magic Mashroome" src4={avatarlogo2} owner ="Shroomine"/>
                <Collectioncard src={robotimg} src2={robot1} src3={robot1} title ="1024+" title2 = "Disco Nachine" src4={avatarlogo3} owner ="BeKind2Robots"/>
            </div>
        </div>
    )
}

export default Collections;