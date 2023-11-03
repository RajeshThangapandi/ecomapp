import "./Products.scss";
import Product from "./Product/Product";
const Products = ({innerPage}) => {
    return (
    <div className="products-container">
        {!innerPage &&< div className="sec-heading">Section Heading</div>}
        <div className="products">
            <Product indexnum={1}/>
            <Product indexnum={2}/>
            <Product indexnum={3}/>
            <Product indexnum={4}/>
            <Product indexnum={5}/>
            <Product indexnum={6}/>
            <Product indexnum={6}/>
            <Product indexnum={6}/>
        </div>
    </div>);
};

export default Products;
