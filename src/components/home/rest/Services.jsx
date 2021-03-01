import { Col, Row } from "react-bootstrap";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";

const Services = () => {
	const servicesInfo = [
		{
			img: fluoride,
			name: "Fluoride Treatment",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			img: cavity,
			name: "Cavity Filling",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			img: whitening,
			name: "Teath Whitening",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
	];
	return (
		<section className="mt-5 pt-5 w-75 text-center mb-5" style={{ margin: "0 auto" }}>
			<h5 className="font-weight-bold	pt-5">OUR SERVICES</h5>
			<h2 className="font-weight-bold mb-5">Services We Provide</h2>
			<Row className="d-flex">
				{servicesInfo.map((service) => (
					<Col md={4} className="">
						<img style={{ height: "80px" }} className="mb-4" src={service.img} alt="" />
						<h4 className="font-weight-bold">{service.name}</h4>
						<p className="text-secondary mt-4">{service.description}</p>
					</Col>
				))}
			</Row>
		</section>
	);
};

export default Services;
