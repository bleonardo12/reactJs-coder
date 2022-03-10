import React from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
    );
};

export default CartWidget;
