import React, {useEffect, useState} from "react";
import ProductDataService from "../../services/api";
import Card from "../../components/Product/Card";
import ManageProduct from "../../components/Product/ManageProduct";

export default function ProductsList({data, dashboard}) {
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
                (e) => {
                    setIsLoaded(true);
                    setError(e);
                }
            )
    };
    return (
        <div className="container">
            <section className="row justify-content-center">
                <div className="col-12 ">
                    <h1 className="pb-4 my-4 text-center">All Games</h1>
                </div>
                {/*todo: add loading and error*/}
                {products.reverse().map((item, index) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 py-md-3 mb-sm-3" key={index}>
                        {dashboard ?
                            <ManageProduct product={item}/>
                            :
                            <Card product={item} link/>}
                    </div>
                ))}
            </section>
        </div>
    );
}