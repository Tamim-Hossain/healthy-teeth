import { Container } from "react-bootstrap";

const AvailableAppointment = ({ date }) => {
	return (
		<Container className="mt-5 pt-5">
			<h2 className="font-weight-bold text-info text-center">AvailAble Appointments on {date}</h2>
		</Container>
	);
};

export default AvailableAppointment;
