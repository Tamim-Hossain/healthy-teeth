import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AvailableAppointment = ({ date }) => {
	const appointmentsData = [
		{
			id: 1,
			name: "Teeth Orthodontics",
			visitingTime: "8:00 AM - 9:00 AM",
			seat: 10,
		},
		{
			id: 2,
			name: "Cosmetic Dentistry",
			visitingTime: "10:50 AM - 11:30 AM",
			seat: 10,
		},
		{
			id: 3,
			name: "Teeth Cleaning",
			visitingTime: "5:00 PM - 6:00 PM",
			seat: 10,
		},
		{
			id: 4,
			name: "Cavity Protection",
			visitingTime: "7:00 AM - 8:30 AM",
			seat: 15,
		},
		{
			id: 5,
			name: "Teeth Orthodontics",
			visitingTime: "8:00 AM - 9:00 AM",
			seat: 10,
		},
		{
			id: 6,
			name: "Teeth Orthodontics",
			visitingTime: "8:00 AM - 9:00 AM",
			seat: 10,
		},
	];
	return (
		<Container className="mt-5 pt-5">
			<h2 className="font-weight-bold text-info text-center">AvailAble Appointments on {date}</h2>
			<hr className="w-50" />
			<Row>
				{appointmentsData.map((appointment) => (
					<Col md={4} className="mb-5 mt-5">
						<Card className="p-3 border-0 shadow">
							<Card.Body className="text-center">
								<Card.Title className="font-weight-bold text-info">{appointment.name}</Card.Title>
								<Card.Text className="font-weight-bold">{appointment.visitingTime}</Card.Text>
								<Card.Subtitle className="text-secondary">
									<small>{appointment.seat} SEATS AVAILABLE</small>
								</Card.Subtitle>
								<Button className="font-weight-bold mt-3" variant="info">
									BOOK APPOINTMENT
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AvailableAppointment;
