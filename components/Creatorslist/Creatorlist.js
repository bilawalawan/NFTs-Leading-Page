import Nftheading from "../Nftheading/Nftheading";
import rocketimg from "../../assets/RocketLaunch.png"
import Creators from "../Creator/Creators";

// import creator1 from "../../assets/Top Creator/Artist Avatar 1.png"
// import creator2 from "../../assets/Top Creator/Artist Avatar 2.png"
// import creator3 from "../../assets/Top Creator/Artist Avatar 3.png"
// import creator4 from "../../assets/Top Creator/Artist Avatar 4.png"
// import creator5 from "../../assets/Top Creator/Artist Avatar 5.png"
// import creator6 from "../../assets/Top Creator/Artist Avatar 6.png"
// import creator7 from "../../assets/Top Creator/Artist Avatar 7.png"
// import creator8 from "../../assets/Top Creator/Artist Avatar 8.png"
// import creator9 from "../../assets/Top Creator/Artist avatar 9.png"
// import creator10 from "../../assets/Top Creator/Artist avatar 10.png"
// import creator11 from "../../assets/Top Creator/Artist avatar 11.png"
// import creator12 from "../../assets/Top Creator/Artist avatar 12.png"

function Creatorlist() {
    return (
        <div className="container">
            <Nftheading
                title="Top Creators"
                para ="Checkout the Top Rated Creators in Marketplace"
                text = "View Rankings"
                src = {rocketimg}
            />
            <Creators/>
            
        </div>
    )
}

export default Creatorlist;