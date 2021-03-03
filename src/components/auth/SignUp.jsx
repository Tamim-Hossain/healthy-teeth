import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SignUp = () => {
	const { register, handleSubmit, errors } = useForm(); // initialize the hook

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control
					placeholder="Enter Email Address"
					type="email"
					name="email"
					ref={register({ required: true })}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					placeholder="Enter Password"
					type="password"
					name="password"
					ref={register({ required: true })}
				/>
			</Form.Group>

			<Button variant="info" className="font-weight-bold" type="submit">
				Create New Account
			</Button>
		</Form>
	);
};

export default SignUp;
