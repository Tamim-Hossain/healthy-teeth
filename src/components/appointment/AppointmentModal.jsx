import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import swal from "sweetalert";

const AppointmentModal = ({ closeModal, isModalOpen, title, date, time }) => {
	const modalStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		const appointmentData = { ...data, title, date, time };
		if (appointmentData) {
			fetch("https://teeth-healthy.herokuapp.com/addAppointment", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(appointmentData),
			})
				.then((res) => res.json())
				.then((result) => {
					swal("Your Appointment Enlisted Successfully.", "", "success");
				});
			closeModal();
		}
	};

	return (
		<Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>
			<Form onSubmit={handleSubmit(onSubmit)} className="p-5">
				<h2 className="font-weight-bold text-info text-uppercase">{title}</h2>
				<p className="text-center text-secondary">
					Time: {time}, {date}
				</p>
				<Form.Group>
					<Form.Control
						type="text"
						placeholder="Enter Your Name"
						ref={register({ required: true })}
						name="name"
						className={errors.name && "border-danger"}
					/>{" "}
					{errors.name && <span className="text-danger">Name is required.</span>}
				</Form.Group>
				<Form.Group>
					<Form.Control
						type="tel"
						placeholder="Enter Your Phone Number"
						ref={register({ required: true })}
						name="phone"
						className={errors.phone && "border-danger"}
					/>{" "}
					{errors.phone && <span className="text-danger">Phone is required.</span>}
				</Form.Group>
				<Form.Group>
					<Form.Control
						type="email"
						placeholder="Enter Your Email Address"
						ref={register({ required: true })}
						name="email"
						className={errors.email && "border-danger"}
					/>{" "}
					{errors.email && <span className="text-danger">Email is required.</span>}
				</Form.Group>
				<br />
				<Button variant="info" type="submit" className="float-right font-weight-bold">
					CONFIRM
				</Button>
			</Form>
		</Modal>
	);
};

Modal.setAppElement("#root");
export default AppointmentModal;
