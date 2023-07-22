function Category(props) {
    return(
        <div className=" col-sm-6 col-md-3 col-lg-3 category-item">
            <div className="category-detail">
                <img src = {props.src}/>
                <p className="text-white">{props.title}</p>
            </div>
        </div>
    )
}

export default Category;