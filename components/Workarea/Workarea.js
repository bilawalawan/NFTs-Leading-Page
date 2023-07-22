import Area1 from "./area1";


function Workarea() {
    return(
        <div className="container mt-5">
           <div className="row mb-4 mt-5 ">
                <div className="col">
                    <h2 className="text-white">
                        Browse Categories
                    </h2>
                    <p className="text-white mt-3">Find Out How to Get Started</p>
                </div>
            </div>
            <div className="row">
                <Area1 heading ="Setup Your Wallet" title ="Setup your best and trusty wallet of choice. Connect it to the Animarket by clicking icon in the top right coener"/>
                <Area1 heading ="Create Collection" title ="Upload great and amazing your work and setup your collection. Add a description, social links and floor price."/>
                <Area1 heading ="Start Earning" title = "Choose between auctions and fixed-price listnings. Start earning by selling your NFTs or trading others"/>
            </div>
        </div>
    )
}

export default Workarea;