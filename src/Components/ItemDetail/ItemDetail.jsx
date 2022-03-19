function ItemDetail({ producto }) {
    return (
        <div>
            <p>{producto.title}</p>
            <p>{producto.category}</p>
            <p>{producto.categoria}</p>
        </div>
    );
}

export default ItemDetail;
