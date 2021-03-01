import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";

const Services = () => {
	const servicesInfo = [
		{
			img: whitening,
			name: "Teath Whitening",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
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
	];
	return (
		<div>
			<h5>OUR SERVICES</h5>
			<h2>Services We Provide</h2>
			{servicesInfo.map((service) => (
				<>
					<img src={service.img} alt="" />
					<h5>{service.name}</h5>
					<p>{service.description}</p>
				</>
			))}
		</div>
	);
};

export default Services;
