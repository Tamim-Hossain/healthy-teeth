import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const AppointmentModal = ({ closeModal, isModalOpen }) => {
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

	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<h2></h2>
				<Form.Control as="select" name="time" ref={register({ required: true })}>
					<option value="" hidden selected>
						Select Time
					</option>
					<option value="1">2</option>
					<option value="2">3</option>
					<option value="3">4</option>
					<option value="4">5</option>
				</Form.Control>
				<Form.Control
					type="text"
					placeholder="Enter Your Name"
					ref={register({ required: true })}
					name="name"
				/>
				<Form.Control
					type="tel"
					placeholder="Enter Your Phone Number"
					ref={register({ required: true })}
					name="phone"
				/>
				<Form.Control
					type="email"
					placeholder="Enter Your Email Address"
					ref={register({ required: true })}
					name="email"
				/>
				<Form.Control type="date" ref={register({ required: true })} name="date" />
				<Button variant="info" type="submit">
					SEND
				</Button>
			</Form>
		</Modal>
	);
};

export default AppointmentModal;
