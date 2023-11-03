import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newsletter from "../Footer/Newsletter/Newsletter";
const Home = () => {
    return <div>
        <Header/>
        <Banner />
        <div className="main-content">
            <div className="layout">
            <Category />
            <Products />
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>;
};

export default Home;
