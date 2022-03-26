import ItemDetailContainer from "../../Container/ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./Item.css"




function Item({ prod, loading }) {
    const { stock} = prod;
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);

    };

    return (
        <div>
            {loading ? (
                <loading />
            ) : (
                <div className="card" style={{ width: "18rem" }} >
                    <div className="card-header">Indumentaria</div>
                    <div className="card-body">
                        <Link to={`/detalle/${prod.id}`}>
                            <img src={prod.img} alt="imagen" className="img1" />
                            <Button onClick={handleButtonClick}>
                                Detalles del producto
                            </Button>
                            {buttonClicked ? (
                                <ItemDetailContainer
                                    
                                ></ItemDetailContainer>
                            ) : null }
                        </Link>
                        <hr></hr>
                        <ItemCount stock={stock} initial={1}  />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Item;