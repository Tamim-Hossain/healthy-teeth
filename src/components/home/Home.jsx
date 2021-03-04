import { Helmet } from "react-helmet";
import Footer from "../shared/Footer";
import Header from "./main/Header";
import Information from "./rest/Information";
import MakeAppointment from "./rest/MakeAppointment";
import Services from "./rest/Services";
import Testimonial from "./rest/Testimonial";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Home | Healthy Teeth</title>
			</Helmet>
			<Header />
			<Services />
			<Information />
			<Testimonial />
			<MakeAppointment />
			<Footer />
		</div>
	);
};

export default Home;
