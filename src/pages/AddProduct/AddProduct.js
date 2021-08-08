import React, {useState} from "react";
import ProductDataService from "../../services/api";

const AddProduct = () => {
    const initialState = {
        title: "",
        description: "",
        image: "",
        category: "",
        quantity: "",
        price: "",
    };
    const [product, setProduct] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setProduct({...product, [name]: value});
    };

    const saveProduct = () => {
        var data = {
            title: product.title,
            description: product.description,
            image: product.image,
            category: product.category,
            quantity: product.quantity,
            price: product.price,
        };

        ProductDataService.create((data))
            .then(() => {
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newProduct = (e) => {
        e.preventDefault()
        setProduct(initialState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You have added new game successfully!</h4>
                    <button className="btn btn-success" onClick={newProduct}>
                        Add another game
                    </button>
                </div>
            ) : (
                <div>
                    <form className="card px-4 py-3">
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
                            <label htmlFor="description">Image</label>
                            <input
                                type="file"
                                className="form-control-file"
                                id="image"

                                value={product.image}
                                onChange={handleInputChange}
                                name="image"
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

                        <div className="card-footer bg-transparent text-center">
                            <button onClick={saveProduct} className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddProduct;