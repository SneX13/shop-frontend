import React, {useEffect, useState} from "react";
import ProductDataService from "../../services/api";
import AddProduct from "../AddProduct/AddProduct";
import ProductsList from "../AllProducts/ProductsList";

export default function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts();
    }, []);

    const getProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProducts(Object.values(response.data));
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="container">
            <h1 className="text-center">Admin Games Management </h1>
            <p>This is the place where you can manage your games, add new games, update existing or removing games from
                stock. </p>
            <section className="row justify-content-center">
                <div className="col-12">
                    <h2 className="pb-4 my-4 text-center">Add New Game</h2>
                    <AddProduct/>
                </div>
            </section>
            <ProductsList data={products} dashboard/>
        </div>
    );
};