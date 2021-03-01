import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Menu = () => {
	const logoStyle = {
		height: " 80px",
		width: "90px",
	};
	return (
		<Navbar expand="lg" style={{ padding: "0" }}>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img style={logoStyle} src={logo} alt="" />
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
