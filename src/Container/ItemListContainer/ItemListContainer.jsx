import { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "../../Components/Item/Item";
import { getFetch } from "../../helpers/gFetch";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
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
                    <h1 className="my-5 text-center">Indumentaria Deportiva</h1>
                    <div className="row">
                        {productos.map((prod) => (
                            <div className="col-md-6 mb-4" key={prod.id}>
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
