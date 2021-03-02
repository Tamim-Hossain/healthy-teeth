import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const CustomAppointment = () => {
	const [patients, setPatients] = useState([]);
	const options = { year: "numeric", month: "long", day: "numeric" };

	useEffect(() => {
		fetch("http://localhost:4000/appointments")
			.then((res) => res.json())
			.then((data) => setPatients(data));
	}, [patients]);

	const filterToday = patients.filter(
		(filterData) => filterData.date === new Date().toLocaleDateString("en-US", options)
	);

	return (
		<Row>
			<Col md={5}></Col>
			<Col md={7}>
				<h2 className="font-weight-bold text-info mb-3">Today's Patients</h2>
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
					{filterToday.map((patient, idx) => (
						<>
							<Col className="text-center font-weight-bold" md={4}>
								<small>{patient.name}</small>
								<hr style={{ width: "460px" }} />
							</Col>
							<Col className="text-center font-weight-bold" md={4}>
								<small>{patient.title}</small>
							</Col>
							<Col className="text-center font-weight-bold" md={4}>
								<small>{patient.phone}</small>
							</Col>
						</>
					))}
				</Row>
			</Col>
		</Row>
	);
};

export default CustomAppointment;
