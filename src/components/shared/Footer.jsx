import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import footerImg from "../../images/footer.png";

const Footer = () => {
	return (
		<footer style={{ backgroundImage: `url(${footerImg})`, backgroundSize: "cover" }}>
			<Container className="pt-5">
				<Row>
					<Col md={4}>
						<h5 className="text-info font-weight-bold mb-3">Services</h5>
						<Link className="text-secondary" to="#">
							Emergency Dental Care
						</Link>
						<br />
						<Link className="text-secondary" to="#">
							Check Up
						</Link>
						<br />
						<Link className="text-secondary" to="#">
							Treatment of personal Diseases
						</Link>
						<br />
						<Link className="text-secondary" to="#">
							Tooth Extraction
						</Link>
					</Col>
					<Col md={4}>
						<h5 className="text-info font-weight-bold mb-3">Oral Health</h5>
						<Link className="text-secondary" to="#">
							Treatment of personal Diseases
						</Link>
						<br />
						<Link className="text-secondary" to="#">
							Emergency Dental Care
						</Link>
						<br />
						<Link className="text-secondary" to="#">
							Tooth Extraction
						</Link>
						<br />
						<Link className="text-secondary" to="#">
							Check UP
						</Link>
					</Col>
					<Col md={4}>
						<h5 className="text-info font-weight-bold mb-3">Contact Us</h5>
						<p className="text-secondary">Brooklyn, NY 10003 USA</p>
						<p className="text-secondary">Phone: +000 123 456789</p>
					</Col>
				</Row>
				<p className="text-center mt-5 text-secondary">&#169;{new Date().getFullYear()}, All Rights Reserved.</p>
			</Container>
		</footer>
	);
};

export default Footer;
