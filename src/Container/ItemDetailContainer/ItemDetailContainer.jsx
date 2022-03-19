import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/gFetch";

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});

    const { detalleId } = useParams();

    useEffect(() => {
        getFetch
            .then((prod) => prod.find((item) => item.id === detalleId))
            .then((prod) => setProducto(prod))
            .catch((err) => console.log(err))
            .finally(() => setProducto(false));
    }, []);

    return (
        <div>
            <p>Detalle del producto</p>
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer;
