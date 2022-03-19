import ItemDetailContainer from "../../Container/ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";
import { Button } from "react-bootstrap";
import imagenes from "../../assets/imagenes";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item({ prod, loading }) {
    console.log({ prod });
    const { category, title, price, stock, id } = prod;
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true);
    };
    return (
        <Link to={`detalle/${prod.id}`}>
            <div>
                {loading ? (
                    <loading />
                ) : (
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <p className="card-text">{category}</p>
                            <p className="card-text">{price}</p>
                            <p className="card-text">{title}</p>
                            <img src={imagenes[0]} />
                            <ItemCount stock={stock} initial={1} />
                            <Button onClick={handleButtonClick}>
                                {" "}
                                Detalles
                            </Button>
                            {buttonClicked ? (
                                <ItemDetailContainer
                                    id={id}
                                ></ItemDetailContainer>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
}

export default Item;
