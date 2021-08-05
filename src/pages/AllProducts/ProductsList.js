import React from "react";
import ProductDataService from "../../services/api";
import Card from "../../components/Product/Card";
import {useList} from "react-firebase-hooks/database";

/*

export default function ProductsList() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        ProductDataService.getAll()
            .then(response => {

                setProducts(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    return (
        <div className="container">
            <section className="row justify-content-center">
                <div className="col-12 ">
                    <h1 className="pb-4 my-4 text-center">All Games</h1>
                </div>
                {products.slice(0).reverse().map((item) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 py-md-3 mb-sm-3" key={item.id}>
                        <Card product={item} link/>
                    </div>
                ))}
            </section>
        </div>
    );
};*/

const ProductList = () => {
    const [products, loading, error] = useList(ProductDataService.getAll());

    return (
        <div className="container">
            <section className="row justify-content-center">
                <div className="col-12 ">
                    <h1 className="pb-4 my-4 text-center">All Games</h1>
                    {error && <strong>Error: {error}</strong>}
                    {loading && <span>Loading...</span>}
                </div>
                {!loading &&
                products &&
                products.map((item, index) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 py-md-3 mb-sm-3" key={index}>
                        <Card product={item} link/>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProductList;