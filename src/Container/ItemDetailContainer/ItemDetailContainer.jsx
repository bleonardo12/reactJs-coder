import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/gFetch";
import Loading from "../../Components/Loading/Loading";
import OnAddFinish from "../../Components/onAddFinish/OnAddFinish";

function ItemDetailContainer() {
    const [productos, setProductos] = useState({});
    const [loading, setLoading] = useState(true);
    const { detalleId } = useParams();

    useEffect(()=>{
        getFetch
        .then(prod => prod.find(item => item.id === detalleId))
        .then(prod => setProductos(prod))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));

    }, [])

    return (
    <>
                {loading ? (
                    <Loading />
                ) : (
    <div>
        
        {<ItemDetail producto={productos} />}
        {OnAddFinish}

    </div>
                )}    
    </>
    )
}

export default ItemDetailContainer;
