import '../Nftscard/Nftscard.css'
function Nftscard(props) {
    return (
        <div className="col-lg-4 mb-2">
            <div className="nft-card pb-3">
                <div className='nftimg'><img src={props.src} /></div>
                <div className="nft-detail m-4">
                    <div className="nft-owner">
                        <h3 className="text-white">{props.title}</h3>
                        <img src={props.logo} /><span className='text-white ms-2'> {props.nftname}</span>
                    </div>
                    <div className="nft-price d-flex justify-content-between">
                        <div className="price">
                            <p className='m-1'>Price</p>
                            <h5 className="text-white">1.63 ETH</h5>
                        </div>
                        <div className="bid-price">
                            <p className='m-1'>Highest Bid</p>
                            <h5 className="text-white">0.33 wETH</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nftscard;