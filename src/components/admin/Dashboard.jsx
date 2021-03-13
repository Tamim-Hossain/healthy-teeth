import { Col, Container, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import SignUp from "../auth/SignUp";
import Menu from "../shared/Menu";
import AddAvailableAppointment from "./AddAvailableAppointment";
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
				<Col md={3} className="mt-3 pt-5">
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/all">
						All Appointments
					</NavLink>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/today">
						Today's Appointments
					</NavLink>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/search">
						Appointments by Date
					</NavLink>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/add">
						Add Available Service
					</NavLink>
					<NavLink activeClassName="bg-light font-weight-bold" className="dropdown-item" to="/dashboard/admin">
						Add New Admin
					</NavLink>
				</Col>
				<Col md={9}>
					{pathname === "/dashboard/all" && <AllAppointment />}
					{pathname === "/dashboard/today" && <TodayAppointment />}
					{pathname === "/dashboard/search" && <CustomAppointment />}
					{pathname === "/dashboard/add" && <AddAvailableAppointment />}
					{pathname === "/dashboard/admin" && <SignUp />}
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
