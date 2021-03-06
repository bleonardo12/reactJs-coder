import { useState, useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "../../Components/Item/Item";
import { getFetch } from "../../helpers/gFetch";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    const { id } = useParams();

    useEffect(()=> {
        if (id) {
            getFetch// simulacion a un llamado a una api        
            .then(resp => setProductos(resp.filter(prod=> prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
        } else {
            getFetch// simulacion a un llamado a una api        
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))            
        }
    }, [id])

    return (
        <>
                {loading ? (
                    <Loading />
                ) : (
                    <div className="container">
                        <h1 className="my-5 text-center">
                            Indumentaria Deportiva
                        </h1>
                        <div className="row">
                            {productos.map((prod) => (
                                <div className="col-md-6 mb-4">
                                    <Item prod={prod} loading={loading} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </>
    );
}

export default ItemListContainer;