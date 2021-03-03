import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const TodayAppointment = () => {
	const options = { year: "numeric", month: "long", day: "numeric" };
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		fetch("https://teeth-healthy.herokuapp.com/appointments")
			.then((res) => res.json())
			.then((data) => setPatients(data));
	}, [patients]);

	const filterToday = patients.filter(
		(filterData) => filterData.date === new Date().toLocaleDateString("en-US", options)
	);

	return (
		<>
			<h2 className="font-weight-bold text-info mb-3">Today's Patients</h2>
			<Row className="pb-5 pt-5 bg-light rounded">
				<Col md={1}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">INDEX</h5>
					<hr />
				</Col>
				<Col md={3}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">NAME</h5>
					<hr />
				</Col>
				<Col md={3}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">TITLE</h5>
					<hr />
				</Col>
				<Col md={2}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">PHONE</h5>
					<hr />
				</Col>
				<Col md={3}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">TIME</h5>
					<hr />
				</Col>
				{filterToday.map((patient, idx) => (
					<>
						<Col className="text-center font-weight-bold" md={1}>
							<p>{idx + 1}.</p>
							<hr style={{ width: "800px" }} />
						</Col>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.name}</p>
						</Col>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.title}</p>
						</Col>
						<Col className="text-center font-weight-bold" md={2}>
							<p>{patient.phone}</p>
						</Col>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.time}</p>
						</Col>
					</>
				))}
			</Row>
		</>
	);
};

export default TodayAppointment;
