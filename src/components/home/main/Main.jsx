import { Button, Col, Row } from "react-bootstrap";
import homeChair from "../../../images/homeChair.png";

const Main = () => {
	return (
		<Row className="d-flex justify-content-center align-items-center pb-5">
			<Col md={5}>
				<h1 className="font-weight-bold">
					Your New Smile <br /> Starts Here
				</h1>
				<p className="text-secondary">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry’s standard dummy text ever since the
				</p>
				<Button variant="info" className="font-weight-bold">
					GET APPOINTMENT
				</Button>
			</Col>
			<Col md={6}>
				<img src={homeChair} alt="" className="img-fluid" />
			</Col>
		</Row>
	);
};

export default Main;
