import Button from "@restart/ui/esm/Button";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import CommerceContext from "../Context/CommerceContext";


const Product = (value) => {
        
        const {dispatch: dispatchCommerce} = useContext(CommerceContext);
        const {dispatch: dispatchCart} = useContext(CartContext);
        
        // console.log(value.value)

        return(
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://ecommerce-jose.herokuapp.com${value.value.img[0].url}`} />
                        <Card.Body>
                                <Card.Title>{value.value.name}</Card.Title>
                                {value.value.stock === 0 ?
                                value.value.stock = 0
                                 :
                                 <Card.Text>
                                 {value.value.description}
                                 </Card.Text>  }
                                
                                <Card.Text>Stock: {value.value.stock}</Card.Text>
                                <Button variant="primary">Wish list</Button>
                                <Button variant="primary" onClick={() => dispatchCommerce({type: 'MODIFY_STOCK', payload: value.value}) & dispatchCart({type: 'ADD_PRODUCT', payload: { values: value.value, qty: 1}})}>
                                Add to cart: ${value.value.price}</Button>
                        </Card.Body>
                </Card>
        )
}

export default Product;