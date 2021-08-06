import React from "react";
import {Link} from "react-router-dom";

export default function Card({product, link}) {
    const {key} = product[0]
    const {title, description, image, price, category, quantity} = product[1]

    return (
        link ?
            <Link to={`/product/${product[0]}`} className="text-decoration-none">
                <div className="card">
                    <img src={image ? image : `https://picsum.photos/300?grayscale?random=${key}`}
                         className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{title}</h5>
                        {/*todo add product category and quantity*/}
                        <p className="card-text"><small className="text-muted">Price: {price}</small></p>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </Link>
            :
            <div className="card">
                <img src={image ? image : `https://picsum.photos/300?grayscale?random=${key}`}
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{title}</h5>
                    {/*todo add product price*/}
                    <p className="card-text"><small className="text-muted">Price: {price} </small></p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
    );
}

