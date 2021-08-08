import React from "react";
import {Link} from "react-router-dom";

export default function Card({product, link}) {
    const {key} = product[0]
    const {title, description, image, price, category} = product[1]

    return (
        link ?
            <Link to={`/product/${product[0]}`} className="text-decoration-none">
                <div className="card">
                    <img src={image ? image : `https://picsum.photos/300?grayscale?random=${key}`}
                         className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{title}</h5>
                        {category ?
                            <span
                                className="badge badge-secondary text-lowercase"> {category}</span>
                            : " n/a"
                        }
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
                    <p className="card-text"><small className="text-muted">Price: {price} </small></p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
    );
}

