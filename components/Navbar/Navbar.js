import '../Navbar/Navbar.css'
import logoimg from '../../assets/Storefront.png'
import Button from '../Button/Button';
function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-between m-0 p-3 navbar-top">
                <div className="col">
                    <img src={logoimg} />
                    <span className="text-white fw-bold ms-2">NFT Marketplace</span>
                </div>
                <div className="col d-flex justify-content-evenly navitems-list">
                    <input type="checkbox" id="menu-toggle" className="toggle-checkbox" />
                    <label for="menu-toggle" className="toggle-button">&#9776;</label>

                    <div className="nav-item">
                        <ul className="menu-list">
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Ranking</a></li>
                            <li><a href="#">Connect a wallet</a></li>
                        </ul>
                    </div>
                    <Button title="Sign Up" />
                </div>
            </div>
        </div>


    )
}

export default Navbar;