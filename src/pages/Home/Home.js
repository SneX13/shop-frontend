import ProductDataService from "../../services/api";
import Card from '../../components/Product/Card';
import React, {useEffect, useState} from "react";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        ProductDataService.getAll()
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(Object.entries(result.data));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    };

    return (
        <div className="container-fluid">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">Need new challenges?</h1>
                    <p className="lead fw-normal">
                        Explore all the most exciting new games coming out this year.
                        Here are the best upcoming games to keep an eye on</p>
                    <a className="btn btn-outline-secondary" href="/featured">Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <section className="row justify-content-center">
                <div className="col-12 ">
                    <h3 className="pb-4 my-4 text-center">Latest Top 5 Games</h3>
                </div>
                {products.slice(0, 5).reverse().map((item, index) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 py-md-3 mb-sm-3" key={index}>
                        <Card product={item} link/>
                    </div>
                ))}
            </section>
        </div>
    );
}