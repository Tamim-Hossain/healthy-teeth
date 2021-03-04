import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Helmet } from "react-helmet";
import appointmentBG from "../../images/homeBackground.png";
import homeChair from "../../images/homeChair.png";
import Footer from "../shared/Footer";
import Menu from "../shared/Menu";
import "./Appointment.css";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
	const [date, setDate] = useState(new Date());
	const options = { year: "numeric", month: "long", day: "numeric" };

	return (
		<>
			<Helmet>
				<title>Appointment | Healthy Teeth</title>
			</Helmet>
			<div style={{ backgroundImage: `url(${appointmentBG})`, backgroundSize: "cover" }}>
				<Menu />
				<Container>
					<Row className="d-flex justify-content-center align-items-center pb-5">
						<Col md={6} className="mt-5">
							<h1 className="font-weight-bold mb-3 pb-5">Appointment</h1>
							<Calendar value={date} onChange={setDate} className="shadow border-0" />
						</Col>
						<Col md={6}>
							<img src={homeChair} alt="" className="img-fluid" />
						</Col>
					</Row>
				</Container>
			</div>
			<AvailableAppointment date={date.toLocaleDateString("en-US", options)} />
			<Footer />
		</>
	);
};

export default Appointment;
