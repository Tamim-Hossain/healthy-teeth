import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddAvailableAppointment = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		if (data) {
			fetch("https://teeth-healthy.herokuapp.com/addavailable", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((result) => {
					swal("Successfully added to available appointment list.", "", "success");
					e.target.reset();
				});
		}
	};

	return (
		<>
			<Helmet>
				<title>Add Service | Healthy Teeth</title>
			</Helmet>
			<h2 className="text-info font-weight-bold mb-3">Add New Service</h2>
			<Form className="w-75 font-weight-bold bg-light p-5 rounded" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId="email">
					<Form.Label>Title:</Form.Label>
					<Form.Control type="text" placeholder="Enter Title" ref={register({ required: true })} name="name" />{" "}
					{errors.name && <span className="text-danger font-weight-normal">This field is required.</span>}
				</Form.Group>

				<Form.Group controlId="time">
					<Form.Label>Visiting Time:</Form.Label>
					<Form.Control as="select" name="visitingTime" ref={register({ required: true })}>
						<option value="" hidden>
							Select Time
						</option>
						<option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
						<option value="10:50 AM - 11:30 AM">10:50 AM - 11:30 AM</option>
						<option value="5:00 AM - 6:00 PM">5:00 AM - 6:00 PM</option>
						<option value="7:00 AM - 8:30 AM">7:00 AM - 8:30 AM</option>
					</Form.Control>{" "}
					{errors.visitingTime && <span className="text-danger font-weight-normal">This field is required.</span>}
				</Form.Group>

				<Form.Group controlId="seat">
					<Form.Label>Available Seat:</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Available Seat Number"
						ref={register({ required: true })}
						name="seat"
						min="1"
					/>{" "}
					{errors.seat && <span className="text-danger font-weight-normal">This field is required.</span>}
				</Form.Group>

				<Button variant="info" type="submit" className="float-right font-weight-bold">
					Submit Data
				</Button>
			</Form>
		</>
	);
};

export default AddAvailableAppointment;
