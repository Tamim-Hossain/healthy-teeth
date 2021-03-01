import { Button, Col, Container, Row } from "react-bootstrap";
import homeInfoImg from "../../../images/homeInfo.png";

const Information = () => {
	return (
		<Container className="pb-5 mb-5 pt-5">
			<Row>
				<Col md={5}>
					<img style={{ height: "500px" }} src={homeInfoImg} alt="" className="img-fluid" />
				</Col>
				<Col md={7}>
					<h1 className="font-weight-bold mt-5">
						Exceptional Dental <br /> Care, On Your Terms.
					</h1>
					<p className="text-secondary mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et aliquam, saepe maxime
						vel omnis ab corrupti sit accusamus error. Unde natus dolore atque delectus porro
						eveniet, placeat quia, expedita molestiae ipsam non facere minima odio iusto modi earum?
						Voluptate aliquid eaque natus dolores aut quia molestias dolorem. Omnis debitis nobis
						fugiat suscipit rerum aliquam error dolores nam blanditiis labore, dicta maiores ea
						ipsum, corrupti est non earum. Iure, delectus!
					</p>
					<Button variant="info" className="font-weight-bold mt-5">
						GET APPOINTMENT
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Information;
