import logo from './logo.svg';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';
import AddProduct from "./pages/AddProduct/AddProduct";
import Product from "./pages/SingleProduct/Product";
import Login from "./pages/Login/Login";
import ProductsList from "./pages/AllProducts/ProductsList";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditProduct from "./pages/Dashboard/EditProduct";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/products" component={ProductsList}/>
                    <Route path="/add-product" component={AddProduct}/>
                    <Route path="/product/:id" component={Product}/>
                    <Route path="/edit-product/:id" component={EditProduct}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/about" component={AboutUs}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
