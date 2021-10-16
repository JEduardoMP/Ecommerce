import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"

//Router
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

const Header = () => {

    const {state} = useContext(CartContext);
    const [q, setQ] =useState(0)
    console.log(state)

    useEffect(() => {
        let sum = 0;
        state.cart.map(element => sum+=element.qty);
        setQ(sum)
    }, [state])

    return(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand><Link to="/">Amazonas</Link></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/shopping-cart">Cart : {q}</Link></Nav.Link>
                <Nav.Link><Link to="/login">Log in</Link></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )

}

export default Header;