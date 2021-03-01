import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-light">
			<Container className="pt-5">
				<Row>
					<Col md={4}>
						<h5>Services</h5>
						<Link className="text-secondary">Emergency Dental Care</Link>
						<br />
						<Link className="text-secondary">Check Up</Link>
						<br />
						<Link className="text-secondary">Treatment of personal Diseases</Link>
						<br />
						<Link className="text-secondary">Tooth Extraction</Link>
					</Col>
					<Col md={4}>
						<h5>Oral Health</h5>
						<Link className="text-secondary">Treatment of personal Diseases</Link>
						<br />
						<Link className="text-secondary">Emergency Dental Care</Link>
						<br />
						<Link className="text-secondary">Tooth Extraction</Link>
						<br />
						<Link className="text-secondary">Check UP</Link>
					</Col>
					<Col md={4}>
						<h5>Contact Us</h5>
						<p className="text-secondary">Brooklyn, NY 10003 USA</p>
						<p className="text-secondary">Phone: +000 123 456789</p>
					</Col>
				</Row>
				<p className="text-center mt-5 text-secondary">
					&#169;{new Date().getFullYear()}, All Rights Reserved.
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
