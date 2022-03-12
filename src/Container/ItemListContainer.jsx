import { useState, useEffect } from "react";
import Loading from "../Components/Loading/Loading";
import getItems from "../helpers/getItems";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItems
            .then((data) => setProductos(data))
            .catch((err) => console.error(`error:${err}`))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container">
            {loading ? (
                <Loading />
            ) : (
                <div className="container">
                    <h1 className="my-5 text-center">Ropa</h1>
                    <div className="row">
                        {productos.map((prod) => (
                            <div className="col-md-4 mb-5" key={prod.id}>
                                <Item prod={prod} loading={loading} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default ItemListContainer;
