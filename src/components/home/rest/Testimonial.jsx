import { Col, Container, Row } from "react-bootstrap";
import emma from "../../../images/emma.png";
import lisa from "../../../images/lisa.png";
import wilson from "../../../images/wilson.png";

const Testimonial = () => {
	const testimonialsData = [
		{
			comment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
			name: "Emma Gomez",
			city: "California",
			img: emma,
		},
		{
			comment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
			name: "Wilson Harry",
			city: "New York",
			img: wilson,
		},
		{
			comment:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
			name: "Lisa Farari",
			city: "Brooklyn",
			img: lisa,
		},
	];
	return (
		<Container>
			<h5 className="text-info font-weight-bold">TESTIMONIAL</h5>
			<h2 className="font-weight-bold mb-5">
				What's Our Patients <br /> Says
			</h2>
			<Row>
				{testimonialsData.map((testimonial) => (
					<Col md={4} className="shadow-sm rounded bg-white mb-5 p-4 border-left">
						<p>{testimonial.comment}</p>
						<div className="d-flex">
							<div>
								<img src={testimonial.img} alt="" className="img-fluid" />
							</div>
							<div className="ml-4 mt-3">
								<h6 className="text-info font-weight-bold">{testimonial.name}</h6>
								<p className="text-secondary">{testimonial.city}</p>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Testimonial;
