import Item from "../Item/Item";
import { memo } from "react"

const ItemList = memo(
    ({ prods }) => {
    return (
        <div>
            <>
                {prods.map((prod) => (
                    <Item key={prod.id} prod={prod} />
                ))}
            </>
        </div>
    )
}
, (anteriorProps, sgteProps)=> anteriorProps.prods.length === sgteProps.prods.length)

export default ItemList;
