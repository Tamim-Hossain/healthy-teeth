import { faClock, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./BusinessInfo.css";

const BusinessInfo = () => {
	const infoData = [
		{
			title: "Opening Hours",
			description: "We are open 7 days",
			icon: faClock,
			backgroundColor: "primary",
		},
		{
			title: "Visit Our Location",
			description: "Brooklyn, NY 10003 USA",
			icon: faMapMarker,
			backgroundColor: "dark",
		},
		{
			title: "Call Us Now",
			description: "+000 123 456789",
			icon: faPhone,
			backgroundColor: "primary",
		},
	];
	return (
		<Row>
			{infoData.map((info) => (
				<Col md={4} className={`d-flex ${info.backgroundColor}`}>
					<div>
						<FontAwesomeIcon icon={info.icon} />
					</div>
					<div>
						<p>{info.title}</p>
						<p>{info.description}</p>
					</div>
				</Col>
			))}
		</Row>
	);
};

export default BusinessInfo;
