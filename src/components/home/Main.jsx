import { Button, Col, Row } from "react-bootstrap";
import homeChair from "../../images/homeChair.png";

const Main = () => {
	return (
		<Row>
			<Col md={5}>
				<h1>Your New Smile Starts Here</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry’s standard dummy text ever since the
				</p>
				<Button>get appointment</Button>
			</Col>
			<Col md={7}>
				<img src={homeChair} alt="" className="img-fluid" />
			</Col>
		</Row>
	);
};

export default Main;
