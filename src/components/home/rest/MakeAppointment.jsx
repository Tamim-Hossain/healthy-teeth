import { Button, Col, Container, Row } from "react-bootstrap";
import appointmentImg from "../../../images/makeAppointment.png";

const MakeAppointment = () => {
	return (
		<section style={{ background: "#3a4256" }} className="mb-5">
			<Container>
				<Row>
					<Col md={5}>
						<img className="img-fluid" src={appointmentImg} alt="" />
					</Col>
					<Col md={7}>
						<h6 className="text-info font-weight-bold mt-5 mb-4">APPOINTMENT</h6>
						<h2 className="text-white font-weight-bold mb-4">
							Make an Appointment <br /> Today
						</h2>
						<p className="text-white mb-5">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quidem assumenda
							odit aut optio provident consectetur incidunt tempora illo dolores?
						</p>
						<Button variant="info">GET APPOINTMENT</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default MakeAppointment;
