import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const AllAppointment = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/appointments")
			.then((res) => res.json())
			.then((data) => setPatients(data));
	}, [patients]);
	return (
		<div>
			<Row className="pb-5 pt-5 bg-light rounded">
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
				<Col md={3}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">PHONE</h5>
					<hr />
				</Col>
				<Col md={3}>
					{" "}
					<h5 className="text-center text-secondary font-weight-bold">DATE</h5>
					<hr />
				</Col>
				{patients.map((patient) => (
					<>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.name}</p>
						</Col>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.title}</p>
						</Col>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.phone}</p>
						</Col>
						<Col className="text-center font-weight-bold" md={3}>
							<p>{patient.date}</p>
						</Col>
					</>
				))}
			</Row>
		</div>
	);
};

export default AllAppointment;
