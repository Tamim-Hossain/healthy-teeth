import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AppointmentModal from "./AppointmentModal";

const AvailableAppointment = ({ date }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");
	const [appointments, setAppointments] = useState([]);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		fetch("https://teeth-healthy.herokuapp.com/availableappointments")
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, [appointments]);
	return (
		<Container className="mt-5 pt-5 mb-5">
			<h2 className="font-weight-bold text-info text-center">AvailAble Appointments on {date}</h2>
			<hr className="w-50" />
			<Row>
				{appointments.map((appointment) => (
					<Col md={4} className="mt-5">
						<Card className="p-3 border-0 shadow">
							<Card.Body className="text-center">
								<Card.Title className="font-weight-bold text-info">{appointment.name}</Card.Title>
								<Card.Text className="font-weight-bold">{appointment.visitingTime}</Card.Text>
								<Card.Subtitle className="text-secondary">
									<small>{appointment.seat} SEATS AVAILABLE</small>
								</Card.Subtitle>
								<Button
									className="font-weight-bold mt-3"
									variant="info"
									onClick={() => {
										openModal();
										setTitle(appointment.name);
										setTime(appointment.visitingTime);
									}}
								>
									BOOK APPOINTMENT
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<AppointmentModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				title={title}
				date={date}
				time={time}
			/>
		</Container>
	);
};

export default AvailableAppointment;
