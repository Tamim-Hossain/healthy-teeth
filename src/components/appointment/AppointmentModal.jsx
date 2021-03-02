import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const AppointmentModal = ({ closeModal, isModalOpen, title, date, time }) => {
	const appointmentData = { title, date, time };
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
		const newData = { ...data, ...appointmentData };
		if (newData) {
			closeModal();
		}
	};
	return (
		<Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>
			<Form onSubmit={handleSubmit(onSubmit)} className="p-5">
				<h3 className="font-weight-bold text-info text-uppercase">{title}</h3>
				<p>
					Time: {time}, {date}
				</p>
				<Form.Control
					type="text"
					placeholder="Enter Your Name"
					ref={register({ required: true })}
					name="name"
					className={errors.name && "border-danger"}
				/>{" "}
				{errors.time && <span className="text-danger">This field is required.</span>}
				<br />
				<Form.Control
					type="tel"
					placeholder="Enter Your Phone Number"
					ref={register({ required: true })}
					name="phone"
					className={errors.phone && "border-danger"}
				/>{" "}
				{errors.time && <span className="text-danger">This field is required.</span>}
				<br />
				<Form.Control
					type="email"
					placeholder="Enter Your Email Address"
					ref={register({ required: true })}
					name="email"
					className={errors.email && "border-danger"}
				/>{" "}
				{errors.time && <span className="text-danger">This field is required.</span>}
				<br />
				<Button variant="info" type="submit" className="float-right font-weight-bold">
					SEND
				</Button>
			</Form>
		</Modal>
	);
};

Modal.setAppElement("#root");
export default AppointmentModal;
