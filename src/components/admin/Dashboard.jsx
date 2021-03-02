import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../shared/Menu";
import AllAppointment from "./AllAppointment";
import CustomAppointment from "./CustomAppointment";
import TodayAppointment from "./TodayAppointment";

const Dashboard = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<Container>
			<Row>
				<Menu />
				<Col md={3} className="mt-2 pt-5">
					<NavLink
						activeClassName="bg-light font-weight-bold"
						className="dropdown-item"
						to="/dashboard/all"
					>
						All Appointments
					</NavLink>
					<NavLink
						activeClassName="bg-light font-weight-bold"
						className="dropdown-item"
						to="/dashboard/today"
					>
						Today's Appointments
					</NavLink>
					<NavLink
						activeClassName="bg-light font-weight-bold"
						className="dropdown-item"
						to="/dashboard/search"
					>
						Appointments by Date
					</NavLink>
				</Col>
				<Col md={9}>
					{pathname === "/dashboard/all" && <AllAppointment />}
					{pathname === "/dashboard/today" && <TodayAppointment />}
					{pathname === "/dashboard/search" && <CustomAppointment />}
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
