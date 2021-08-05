import ProductDataService from "../../services/api";
import Card from '../../components/Product/Card';
import {useList} from "react-firebase-hooks/database";
import React from "react";

export default function Home() {
    const [products, loading, error] = useList(ProductDataService.getAll());
    return (
        <div className="container-fluid">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Punny headline</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing
                        efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="/">Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <section className="row justify-content-center">
                <div className="col-12 ">
                    <h3 className="pb-4 my-4 text-center">Latest Top 5 Games</h3>
                    {error && <strong>Error: {error}</strong>}
                    {loading && <span>Loading...</span>}
                </div>
                {!loading &&
                products &&
                products.slice(0, 5).reverse().map((item, index) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 py-md-3 mb-sm-3" key={index}>
                        <Card product={item} link/>
                    </div>
                ))}
            </section>
        </div>
    );
}