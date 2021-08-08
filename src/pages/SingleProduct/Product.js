import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PageNotFound from "../404/PageNotFound";
import ProductDataService from "../../services/api";

export default function Product() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    let {id} = useParams();

    useEffect(() => {
        getProductById();
    }, [id]);
    const getProductById = () => {
        ProductDataService.get(id)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProduct(result.data);
                },
                (e) => {
                    setIsLoaded(true);
                    setError(e);
                }
            )
    };

    const addToCart = () => {
        /*todo write this function*/
    }

    return (
        product ?
            <div className="container">
                <div className="row my-3 ">
                    <div className="col-12 col-md-6 ">
                        <div className="card">
                            <img
                                src={product.image !== "" ? product.image : `https://picsum.photos/300?grayscale?random`}
                                className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">{product.title}</h5>
                                <p className="card-text"><small className="text-muted">Price: {product.price} </small>
                                </p>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Category:
                                    {product.category ?
                                        <span
                                            className="badge badge-secondary text-lowercase"> {product.category}</span>
                                        : " n/a"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card mb-3">
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>
                                        Availability: {product.quantity > 0 ? "In stock" : "Not available"}
                                    </li>
                                    <li>
                                        Delivery in 2-5 days
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent text-center">
                                <button onClick={() => addToCart(id)}
                                        className="btn btn-success btn-sm">
                                    Buy Game
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <PageNotFound/>

    )


}