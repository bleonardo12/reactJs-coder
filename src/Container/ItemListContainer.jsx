import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function ItemListContainer({ greeting }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("disparo 1");
    });

    const handleCount = () => {
        setCount(count + 1);
        console.log(count);
    };
    return (
        <>
            <div>{greeting}</div>
            <label>{count}</label>
            <button onClick={handleCount}>
                <AiOutlinePlus /> <hr /> <AiOutlineMinus />
            </button>
        </>
    );
}

export default ItemListContainer;
