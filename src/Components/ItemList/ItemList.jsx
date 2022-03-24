import Item from "../Item/Item";

function itemList(prods) {
    return (
        <div>
            <>
                {prods.map((prod) => (
                    <Item key={prod.id} prod={prod} />
                ))}
            </>
        </div>
    );
}

export default itemList;
