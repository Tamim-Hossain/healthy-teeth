import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../shared/Menu";
import AllAppointment from "./AllAppointment";
import TodayAppointment from "./TodayAppointment";

const Dashboard = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<Container>
			<Row>
				<Menu />
				<Col md={3}>
					<NavLink activeClassName="bg-light" className="dropdown-item" to="/dashboard/today">
						Todays Appointments
					</NavLink>
					<NavLink activeClassName="bg-light" className="dropdown-item" to="/dashboard/all">
						All Appointments
					</NavLink>
				</Col>
				<Col md={9}>
					{pathname === "/dashboard" && <TodayAppointment />}
					{pathname === "/dashboard/today" && <TodayAppointment />}
					{pathname === "/dashboard/all" && <AllAppointment />}
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
