import { Col, Row } from "react-bootstrap";

const Footer = () => {
	return (
		<>
			<Row>
				<Col md={3}>one</Col>
				<Col md={3}>2</Col>
				<Col md={3}>3</Col>
				<Col md={3}>4 </Col>
			</Row>
			<p className="text-center">Copyright {new Date().getFullYear()}, All Rights Reserved.</p>
		</>
	);
};

export default Footer;
