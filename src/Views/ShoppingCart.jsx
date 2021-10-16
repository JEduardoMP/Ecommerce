import Button from "@restart/ui/esm/Button";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import CommerceContext from "../Context/CommerceContext";


const ShoppingCart = () => {

    // let qty = 1;

    const {state, dispatch: dispatchCart} = useContext(CartContext);
    const {dispatch: dispatchCommerce} = useContext(CommerceContext);

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

                        <td>
                            <div style={{ height:'100%',display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <div>

                                    <button onClick={() => dispatchCart({type: 'SUBTRACTION', payload: product}) & dispatchCommerce({type: 'UPDATE', payload: product.values})} style={{borderRadius:'50%', border:'none', backgroundColor: 'transparent', color: 'white'}}>
                                        <i class="fas fa-minus-circle"></i>
                                    </button>

                                    <span style={{marginLeft: '0.8rem', marginRight: '0.8rem'}}>{product.qty}</span>

                                    <button onClick={() => dispatchCart({type: 'ADD_PRODUCT', payload: product}) & dispatchCommerce({type: 'MODIFY_STOCK', payload: product.values})} style={{borderRadius:'1rem', border:'none', backgroundColor: 'transparent', color: 'white'}}>
                                        <i class="fas fa-plus-circle"></i>
                                    </button>

                                </div>
                            </div>
                        </td>

                        <td>
                            {product.values.name}
                        </td>

                        <td>
                            <img src={`https://ecommerce-jose.herokuapp.com${product.values.img[0].url}`} alt="" />
                        </td>

                        <td>
                            {product.values.price * product.qty}
                        </td>

                        <td>
                            <Button variant="danger" onClick={() => dispatchCart({type: 'DELETE', payload: product}) & dispatchCommerce({type: 'UPDATE', payload: product.values})}>Delete</Button>
                        </td>

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