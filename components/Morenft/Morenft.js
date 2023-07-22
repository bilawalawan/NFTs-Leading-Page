import Nftheading from "../Nftheading/Nftheading";
import eye from "../../assets/Eye.png"
import Nftscard from "../Nftscard/Nftscard";

import nftimg1 from "../../assets/glaxy.png"
import nftlogo from "../../assets/BeKindReboot.png"
import nftimg2 from "../../assets/endena.png"
import nftlogo1 from "../../assets/Avatar.png"
import nftimg3 from "../../assets/NFT img 1.png"
import nftlogo2 from "../../assets/Mrfox.png"

function Morenft(props) {
    return (
        <div className="container mt-5">
            <div className="row mt-5 mb-5">
                <Nftheading title = "Discover More NFTs" para = "Explore New Trending NFTs" src ={eye} text = "See All"/>
                
            </div>
            <div className="row ">
                <Nftscard src = {nftimg1} logo = {nftlogo} title="Distant Galaxy" nftname ="MoonDancer" />
                <Nftscard src = {nftimg2} logo = {nftlogo1} title="Life On Edena" nftname ="Nebulakid"/>
                <Nftscard src = {nftimg3} logo = {nftlogo2} title="AstroFiction" nftname ="Spaceone"/>
            </div>
        </div>
    )
}

export default Morenft;