import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Loader from "react-loader-spinner";

const AllAppointment = () => {
	const [patients, setPatients] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://teeth-healthy.herokuapp.com/appointments")
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setPatients(data);
			});
	}, [patients]);

	return (
		<>
			<Helmet>
				<title>All Appointments | Healthy Teeth</title>
			</Helmet>
			<h2 className="font-weight-bold text-info mb-3">All Patients</h2>
			{loading ? (
				<div className="m-5 d-flex justify-content-center">
					<Loader type="Oval" color="#1cc7c1" height={120} width={120} />
				</div>
			) : (
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
						<h5 className="text-center text-secondary font-weight-bold">DATE</h5>
						<hr />
					</Col>
					{patients.length === 0 && (
						<p className="font-weight-bold display-4" style={{ margin: "auto" }}>
							No data found.
						</p>
					)}
					{patients.map((patient, idx) => (
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
								<p>{patient.date}</p>
							</Col>
						</>
					))}
				</Row>
			)}
		</>
	);
};

export default AllAppointment;
