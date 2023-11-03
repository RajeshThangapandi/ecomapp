import "./Product.scss";
import prod from "../../assets/products/earbuds-prod-1.webp";
const Product = (props) => {
    return  <div className="product-card">
        <div className="thumbnail">
            <img  src={prod} alt="product"/>

            {/* <img  src={`../../assets/products/earbuds-prod-${props.indexnum}.webp`} alt="product"/> */}
        </div>
        <div className="prod-details">
        <span className="name">Product name</span>
        <span className="price">&#x20B9;499</span>
    </div>
    </div>;
};

export default Product;
