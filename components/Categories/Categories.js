import Category from "../Category/Category";
import '../Categories/Categories.css'

import category1 from "../../assets/categories/art.png"
import category2 from '../../assets/categories/collectibilities.png'
import category3 from "../../assets/categories/music.png"
import category4 from "../../assets/categories/photos.png"

import category5 from "../../assets/categories/video.png"
import category6 from "../../assets/categories/utility.png"
import category7 from "../../assets/categories/sports.png"
import category8 from "../../assets/categories/virtual World.png"

function Categories() {
    return (
        <div className="container categories-area ">
            <div className="row mb-4">
                <div className="col">
                    <h2 className="text-white">
                        Browse Categories
                    </h2>
                </div>
            </div>
            {/* <div className="container m-0"> */}
                <div className="row  ">
                    <Category src={category1} title="Art" />
                    <Category src={category2} title="Collectibles" />
                    <Category src={category3} title="Music" />
                    <Category src={category4} title="Photography" />
                </div>
                <div className="row">
                    <Category src={category5} title="Video" />
                    <Category src={category6} title="Utility" />
                    <Category src={category7} title="Sports" />
                    <Category src={category8} title="Virtual World" />
                </div>
            {/* </div> */}
        </div>
    )
}

export default Categories;