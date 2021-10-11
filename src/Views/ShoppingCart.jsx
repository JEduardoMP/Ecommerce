import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";


const ShoppingCart = () => {

    const {state, } = useContext(CartContext);

    console.log(state)
    return (
        state && state.cart.length > 0 ?
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Qty</th>
                <th>Name</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {state && state.cart.map(product => (
                    <tr>
                        <td>{product.qty}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
                <tr>
                    <td>Total:</td>
                    <td>{state.totalPrice}</td>
                </tr>
            </tbody>
        </Table>
        : 
        <Link to={"/"} style={{color: 'lightblue', textDecoration: 'underline', textAlign: 'center'}}>Go shop</Link>
    )
}

export default ShoppingCart;