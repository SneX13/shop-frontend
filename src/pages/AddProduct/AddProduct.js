import React, {useState} from "react";
import ProductDataService from "../../services/api";

export default function AddProduct() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [loader, setLoader] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const data = {
        title: title,
        description: description,
        category: category,
        image: image,
        quantity: quantity,
        price: price,
    };

    function handleSubmit(e) {
        e.preventDefault();
        setLoader(true)
        ProductDataService.create((data))
            .then(function (response) {
                //todo push response.data to parent or update store holding all games
            })
            .catch(function (err) {
                console.log("ERROR:", err);
            })
            .finally(() => {
                setTitle("")
                setDescription("")
                setImage("")
                setCategory("")
                setQuantity("")
                setPrice("")
                setLoader(false)
                setSubmitted(true);
            });
    }

    const newProduct = (e) => {
        e.preventDefault()
        setTitle("")
        setDescription("")
        setImage("")
        setCategory("")
        setQuantity("")
        setPrice("")
        setLoader(false);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div className="text-center">
                    <h4>You have added new game successfully!</h4>
                    <button className="btn btn-success" onClick={newProduct}>
                        Add another game
                    </button>
                </div>
            ) : (
                <div>
                    <form className="card px-4 py-3" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" name="title" value={title} className="form-control"
                                   onChange={(e) => setTitle(e.target.value)} required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input id="description" type="text" name="description" value={description}
                                   className="form-control"
                                   onChange={(e) => setDescription(e.target.value)} required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input id="image" type="file" name="image" value={image} className="form-control-file"
                                   onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input id="category" type="text" name="category" value={category} className="form-control"
                                   onChange={(e) => setCategory(e.target.value)} required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input id="quantity" type="number" name="quantity" value={quantity} className="form-control"
                                   onChange={(e) => setQuantity(e.target.value)} required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input id="price" type="text" name="price" value={price} className="form-control"
                                   onChange={(e) => setPrice(e.target.value)} required
                            />
                        </div>

                        <div className="card-footer bg-transparent text-center">
                            <button disabled={loader} type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}