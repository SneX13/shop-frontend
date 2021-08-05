import React, {useEffect, useState} from "react";

import {useHistory, useParams} from "react-router-dom";
import ProductDataService from "../../services/api";
import Card from "../../components/Product/Card";
import PageNotFound from "../404/PageNotFound";
import firebase from "firebase";

export default function EditProduct() {
    const dbRef = firebase.database().ref('/products');
    const [product, setProduct] = React.useState(null);
    let {id} = useParams();
    const history = useHistory();
    const [message, setMessage] = useState("");

    useEffect(() => {
        getProductById();
    }, [id]);
    const getProductById = () => {
        dbRef.child(id).get().then((snapshot) => {
            if (snapshot.exists()) {
                setProduct(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch(e => {
            console.log(e);
        });
    }

    const handleInputChange = event => {
        const {name, value} = event.target;
        setProduct({...product, [name]: value});
    };

    const updateProduct = () => {
        const data = {
            title: product.title,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            price: product.price,
        };

        ProductDataService.update(id, data)
            .then(() => {
                setMessage("The product was updated successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deleteProduct = () => {
        ProductDataService.remove(id)
            .then(() => {
                //props.refreshList();
                setMessage('The product was deleted!')
            })
            .catch((e) => {
                console.log(e);
            });
    };


    return (
        product ?
            <div className="container">
                <div className="row my-3 justify-content-center">
                    <div className="col-12 col-md-6 ">
                        {message ? (
                                <p>{message}</p>
                            )
                        : (
                            <div className="card">
                                <img
                                    src={product.image !== "" ? product.image : `https://picsum.photos/300?grayscale?random`}
                                    className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <div>
                                        <form className=" px-4 py-3">
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="title"
                                                    required
                                                    value={product.title}
                                                    onChange={handleInputChange}
                                                    name="title"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="description"
                                                    required
                                                    value={product.description}
                                                    onChange={handleInputChange}
                                                    name="description"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="description">Category</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="category"
                                                    required
                                                    value={product.category}
                                                    onChange={handleInputChange}
                                                    name="category"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Quantity</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="quantity"
                                                    value={product.quantity}
                                                    onChange={handleInputChange}
                                                    name="quantity"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Price</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="price"
                                                    required
                                                    value={product.price}
                                                    onChange={handleInputChange}
                                                    name="price"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent text-center">
                                    <button onClick={() => updateProduct(id)}
                                            className="btn btn-success btn-sm mr-1">
                                        Update Game
                                    </button>
                                    <button onClick={() => deleteProduct(id)}
                                            className="btn btn-danger btn-sm">
                                        Delete Game
                                    </button>

                                </div>
                            </div>
                        )
                        }
                    </div>

                </div>
            </div>
            :
            <PageNotFound/>

    )


}