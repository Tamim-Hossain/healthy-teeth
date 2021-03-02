import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AllAppointment from "./AllAppointment";
import TodayAppointment from "./TodayAppointment";

const Dashboard = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<Row>
			<Col md={3}>sidebar</Col>
			<Col md={9}>
				{pathname === "/dashboard" && <TodayAppointment />}
				{pathname === "/dashboard/today" && <TodayAppointment />}
				{pathname === "/dashboard/all" && <AllAppointment />}
			</Col>
		</Row>
	);
};

export default Dashboard;
