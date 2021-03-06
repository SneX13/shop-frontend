import React from "react";
import {Link} from "react-router-dom";


export default function ManageProduct({product}) {
    const {key} = product[0];
    const {title, description, imgage, price} = product[1];

    return (
        <div className="card shadow-sm">
            <img src={imgage ? imgage : `https://picsum.photos/300?grayscale?random=${key}`}
                 className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-capitalize">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Link to={`/product/${product[0]}`} className="text-decoration-none">
                            <button type="button" className="btn mr-1 btn-sm btn-outline-secondary">View</button>
                        </Link>
                        <Link to={`/edit-product/${product[0]}`} className="text-decoration-none">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </Link>
                    </div>
                    <small className="text-muted">Price: {price}</small>
                </div>
            </div>
        </div>

    );
}

