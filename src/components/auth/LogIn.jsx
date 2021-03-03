import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Menu from "../shared/Menu";

const LogIn = () => {
	const { register, handleSubmit, errors } = useForm(); // initialize the hook

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<Container>
			<Menu />

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						placeholder="Enter Email Address"
						type="email"
						name="email"
						ref={register({ required: true })}
					/>
					{errors.email && <span className="text-danger">Email is required.</span>}
				</Form.Group>

				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						placeholder="Enter Password"
						type="password"
						name="password"
						ref={register({ required: true })}
					/>
					{errors.password && <span className="text-danger">Password is required.</span>}
				</Form.Group>

				<Button variant="info" className="font-weight-bold" type="submit">
					Create New Account
				</Button>
			</Form>
		</Container>
	);
};

export default LogIn;
