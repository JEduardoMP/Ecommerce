import { Container, Nav, Navbar } from "react-bootstrap"

//Router
import { Link } from "react-router-dom";

const Header = () => {

    return(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand><Link to="/">Amazonas</Link></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to="/shopping-cart">Cart</Link></Nav.Link>
                <Nav.Link><Link to="/login">Log in</Link></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )

}

export default Header;