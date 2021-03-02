import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";

const Menu = () => {
	const location = useLocation();
	const { pathname } = location;

	const logoStyle = {
		height: "90px",
		width: "100px",
	};
	return (
		<Container>
			<Navbar expand="lg" style={{ padding: "0" }}>
				<Navbar.Brand as={Link} to="/">
					<img style={logoStyle} src={logo} alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link
							as={Link}
							to="/"
							className={`font-weight-bold ${pathname === "/" ? "text-danger" : "text-info"}`}
						>
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/appointment"
							className={`font-weight-bold ${pathname === "/" ? "text-danger" : "text-info"}`}
						>
							Appointment
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/dashboard"
							className={`font-weight-bold ${pathname === "/" ? "text-danger" : "text-info"}`}
						>
							Dashboard
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Menu;
