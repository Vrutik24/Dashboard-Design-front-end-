import React from "react";
import TopBar from "./Components/Topbar/topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import MainPage from "./Components/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css"
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import Product from "./Pages/product/Product";
import ProductList from "./Pages/productList/ProductList";
import NewProduct from "./Pages/newProduct/NewProduct";

function App()
{
    return (<Router>
    <div className="App">
        
            <TopBar/>
            <div className="container">
                <Sidebar className="sidebarMain"/>
                <Routes>
                    <Route path="/" element = {<MainPage/>}/>
                    <Route path="/users" element = {<UserList/>}/>
                    <Route path="/user/:userId" element = {<User/>}/>
                    <Route path="/newUser" element = {<NewUser/>} />
                    <Route path="/products" element = {<ProductList/>}/>
                    <Route path="/product/:productId" element = {<Product/>}/>
                    <Route path="/newProduct" element = {<NewProduct/>}/>
                </Routes>
            </div>
        
    </div>
    </Router>
    )
}

export default App;