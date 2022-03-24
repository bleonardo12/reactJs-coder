import ItemDetailContainer from "../../Container/ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";
import { Button } from "react-bootstrap";
import imagenes from "../../assets/imagenes";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item({ prod, loading }) {
    const { stock, id } = prod;
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
    };
    return (
        <div>
            {loading ? (
                <loading />
            ) : (
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">{`${prod.title} - ${prod.category}`}</div>
                    <div className="card-body">
                        <Link to={`detalle/${prod.id}`}>
                            <img src={imagenes[0]} />
                            <Button onClick={handleButtonClick}>
                                Detalles del producto
                            </Button>
                            {buttonClicked ? (
                                <ItemDetailContainer
                                    id={prod.id}
                                ></ItemDetailContainer>
                            ) : null}
                        </Link>
                        <hr></hr>
                        <ItemCount stock={stock} initial={1} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Item;
