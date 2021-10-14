import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";


const ShoppingCart = () => {

    // let qty = 1;

    const {state, dispatch} = useContext(CartContext);

    console.log(state)
    return (
        state && state.cart.length > 0 ?(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Qty</th>
                <th>Name</th>
                <th>Img</th>
                <th>Price</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {state && state.cart.map(product => (
                    <tr>
                        <td><button><i class="fas fa-minus-circle"></i></button><span>{product.qty}</span><button><i class="fas fa-plus-circle"></i></button></td>
                        <td>{product.values.name}</td>
                        <td><img src={`http://localhost:1337${product.values.img[0].url}`} alt="" /></td>
                        <td>{product.values.price * product.qty}</td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
                <tr>
                    <td>Total:</td>
                    <td>{state.totalPrice}</td>
                    <td><button>Pay</button></td>
                </tr>
            </tbody>
        </Table>)
        : (
        <Link to="/" style={{color: 'lightblue', textDecoration: 'underline', textAlign: 'center'}}>Go shop</Link>
        )
    )
}

export default ShoppingCart;