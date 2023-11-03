import Login from "./loginmodule/Login.js"
import Signup from "./signupmodule/Signup.js"
// import Dashboard from "./dashboard/Dash.js";
import Home from "./Home/Home.jsx"
import Header from "./Header/Header.jsx"
import Newsletter from "./Footer/Newsletter/Newsletter.jsx";
import AppContext from "./utils/context.js"
import Category from "./Home/Category/Category.jsx";
import Footer from "./Footer/Footer.jsx"
import SingleProduct from "./SingleProduct/SingleProduct.jsx"
import {Routes, Route,BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="app">
          <AppContext>
    {/* <Header /> */}
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/product/:id" element={<SingleProduct />}/>
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home/>} />
      </Routes>
      {/* <Newsletter />
      <Footer /> */}
    </AppContext>
    </div>
 



    // <div className="App">
    //   <Login/>
    //   {/* <Signup/> */}
    // </div>
  );
}

export default App;
