import React, {useEffect, useState} from "react";
import ProductsList from "../AllProducts/ProductsList";
import {useParams} from "react-router-dom/cjs/react-router-dom";

export default function Search() {
    const [results, setResults] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
        if (searchTerm) {
            const searchResults = results.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setResults(searchResults);
        }
    }, [searchTerm]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 ">
                    <h1 className="pb-4 my-4 text-center">Search results page</h1>
                </div>
                <div className="col-12">
                    {results ?
                        <ProductsList data={results}/>
                        :
                        <p>No results. Go back to <a href="/">Home</a> page or try to search for a new game.</p>
                    }

                </div>
            </div>
        </div>

    );
}