import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<Navbar expand="lg">
			<Container fluid>
				<Navbar.Brand as={Link} to="/">
					logo
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Menu;
