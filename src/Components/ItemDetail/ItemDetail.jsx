import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({producto}) {
    const [isCant, setIsCant] = useState(false)
    const {addToCart} = useCartContext()
    
    const onAdd= (cant) => {
        addToCart( { ...producto, cantidad: cant } )
        setIsCant(true)
    }

    return (
    <div >
        <center>
            <img src={producto.img} alt = 'imagen' />
            <p className='alert alert-primary w-25'>{producto.title}</p>
            <p className='alert alert-primary w-25'>{producto.price}</p>
            <p className='alert alert-primary w-25'>{producto.category}</p>
        </center>
        {isCant ?
                <>  
                    <Link to='/'>
                        <button className='btn btn-outline-primary'>Seguir comprando</button>

                    </Link>
                    <Link to='/cart'>
                        <button className='btn btn-outline-success'>Ir a Cart</button>
                    </Link>
                </>
             :
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            }
        </div>
    )
}



export default ItemDetail;
