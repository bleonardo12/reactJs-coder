function ItemDetail({ producto }) {
    return (
        <div>
            <center>
                <p>{producto.title}</p>
                <p>{producto.category}</p>
                <p>{producto.talle}</p>
                <p>{producto.price}</p>
            </center>
        </div>
    );
}

export default ItemDetail;
