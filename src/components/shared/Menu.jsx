import firebase from "firebase/app";
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";

const Menu = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const { isLoggedIn } = loggedInUser;
	const location = useLocation();
	const { pathname } = location;

	const logoStyle = {
		height: "90px",
		width: "100px",
	};

	const handleLogOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				setLoggedInUser({
					isLoggedIn: false,
				});
				localStorage.removeItem("isLoggedIn");
			})
			.catch((error) => {
				// An error happened.
			});
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
							className={`font-weight-bold ${pathname === "/" ? "" : "text-info"}`}
							style={{ color: `${pathname === "/" ? "#f7582d" : ""}` }}
						>
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/appointment"
							className={`font-weight-bold ${pathname === "/" ? "" : "text-info"}`}
							style={{ color: `${pathname === "/" ? "#f7582d" : ""}` }}
						>
							Appointment
						</Nav.Link>
						<Nav.Link
							as={Link}
							to="/dashboard/all"
							className={`font-weight-bold ${pathname === "/" ? "" : "text-info"}`}
							style={{ color: `${pathname === "/" ? "#f7582d" : ""}` }}
						>
							Dashboard
						</Nav.Link>
						{isLoggedIn && (
							<Nav.Link
								onClick={handleLogOut}
								className={`font-weight-bold ${pathname === "/" ? "" : "text-info"}`}
								style={{ color: `${pathname === "/" ? "#f7582d" : ""}` }}
							>
								Log Out
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Menu;
