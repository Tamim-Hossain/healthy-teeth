import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import { Helmet } from "react-helmet";
import Loader from "react-loader-spinner";

const CustomAppointment = () => {
	const [patients, setPatients] = useState([]);
	const options = { year: "numeric", month: "long", day: "numeric" };
	const [date, setDate] = useState(new Date());
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://teeth-healthy.herokuapp.com/appointments")
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setPatients(data);
			});
	}, [patients]);

	const filterToday = patients.filter((filterData) => filterData.date === date.toLocaleDateString("en-US", options));

	return (
		<Row>
			<Helmet>
				<title>Search | Healthy Teeth</title>
			</Helmet>
			<Col md={5}>
				<h2 className="font-weight-bold text-info mb-3 mt-2">Select Date:</h2>
				<Calendar value={date} onChange={setDate} />
			</Col>
			<Col md={7}>
				<h2 className="font-weight-bold text-info mb-3">Appointments on {date.toLocaleDateString("en-US", options)}</h2>
				{loading ? (
					<div className="m-5 d-flex justify-content-center">
						<Loader type="Oval" color="#1cc7c1" height={120} width={120} />
					</div>
				) : (
					<Row className="pb-5 pt-5 bg-light rounded">
						<Col md={4}>
							{" "}
							<h6 className="text-center text-secondary font-weight-bold">NAME</h6>
							<hr />
						</Col>
						<Col md={4}>
							{" "}
							<h6 className="text-center text-secondary font-weight-bold">TITLE</h6>
							<hr />
						</Col>
						<Col md={4}>
							{" "}
							<h6 className="text-center text-secondary font-weight-bold">PHONE</h6>
							<hr />
						</Col>
						{filterToday.length === 0 && (
							<p className="font-weight-bold" style={{ margin: "auto", fontSize: "2.5rem" }}>
								No data found.
							</p>
						)}
						{filterToday.map((patient, idx) => (
							<>
								<Col className="text-center" md={4}>
									<p>{patient.name}</p>
									<hr style={{ width: "460px" }} />
								</Col>
								<Col className="text-center" md={4}>
									<p>{patient.title}</p>
								</Col>
								<Col className="text-center" md={4}>
									<p>{patient.phone}</p>
								</Col>
							</>
						))}
					</Row>
				)}
			</Col>
		</Row>
	);
};

export default CustomAppointment;
