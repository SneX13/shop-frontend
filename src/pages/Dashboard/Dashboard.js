import React, {useState, useEffect} from "react";
import ProductDataService from "../../services/api";
import Card from "../../components/Product/Card";
import ManageProduct from "../../components/Product/ManageProduct";
import AddProduct from "../AddProduct/AddProduct";
import {useList} from "react-firebase-hooks/database";

export default function Dashboard() {
    const [products, loading, error] = useList(ProductDataService.getAll());

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
            <section className="row justify-content-center">
                <div className="col-12 ">
                    <h2 className="pb-4 my-4 text-center">All Games</h2>
                </div>
                {products.slice(0).reverse().map((item, index) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 py-md-3 mb-sm-3" key={index}>
                        <ManageProduct product={item}/>
                    </div>
                ))}
            </section>
        </div>
    );
};