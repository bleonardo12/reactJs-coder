import ItemCount from "./ItemCount";

function Item({ prod, loading }) {
    console.log({ prod });
    const { category, title, price, stock, id, img } = prod;
    return (
        <div>
            {loading ? (
                <loading />
            ) : (
                <div className="card" key={id} style={{ width: "18rem" }}>
                    <div className="card-body">
                        <p className="card-text">{category}</p>
                        <p className="card-text">{price}</p>
                        <p className="card-text">{title}</p>
                        <img>{img}</img>
                        {/* <Link to={`/details/${prod.id}`} className="btn btn-primary"> +*/}
                        <ItemCount stock={stock} initial={1} />
                        {/*</link/> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Item;
