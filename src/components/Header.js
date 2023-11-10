import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark text-white">
            <Container>
                <Navbar.Brand className={"text-white"} href="#home">Fahad.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"text-white"} href="#home">Projects</Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">Reviews</Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">Social Media Profiles</Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
