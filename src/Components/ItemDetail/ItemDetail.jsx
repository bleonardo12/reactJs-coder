import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { Card } from "reactstrap"
import {Container} from "reactstrap"
import {Row} from "reactstrap"
import {Col} from "reactstrap"
import {Button} from "reactstrap"


function ItemDetail({producto}) {
    const [onButton, setOnButton] = useState("button")
    const {addToCart} = useCartContext()
    
    const onAdd= (cant) => {
        console.log(cant)
        addToCart( { ...producto, cantidad: cant } )
        setOnButton("true")
        
    }
    const GoToCart = () => {

    return (
    <Link to="/Cart">
    <Button variant="danger" onClick={()=> console.log("finalizar. Ir al cart")}>
         <GoToCart/>
        </Button>
    </Link>
    )
    }    

    return (
        <Container>
        <Row className="justify-content-center">
        <Col>
        <Card body border="danger" style={{width:"50rem"}}>
            <img src={producto.img} alt = 'imagen' />
            <p className='alert alert-primary w-25'>{producto.title}</p>
            <p className='alert alert-primary w-25'>{producto.price}</p>
            <p className='alert alert-primary w-25'>{producto.category}</p>
        { 
            onButton === "button" ?
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                :
                <addToCart/>
        }
    </Card>
    </Col>
    </Row>
    </Container>
    )
}



export default ItemDetail;
