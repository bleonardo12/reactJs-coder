import ItemCount from "./ItemCount";

function Item({ prod, loading }) {
    return (
        <div>
            {loading ? (
                <loading />
            ) : (
                <div
                    className="card"
                    key={prod.name}
                    style={{ width: "18rem" }}
                >
                    <div className="card-body">
                        <p className="card-text">{prod.description}</p>
                        {/* <Link to={`/details/${prod.id}`} className="btn btn-primary"> +*/}
                        <ItemCount stock={10} initial={1} />
                        {/*</link/> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Item;
