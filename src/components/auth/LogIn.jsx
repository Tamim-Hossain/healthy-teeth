import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Menu from "../shared/Menu";

const LogIn = () => {
	const { register, handleSubmit, errors } = useForm();
	const [, setLoggedInUser] = useContext(UserContext);
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const handleLogIn = (data) => {
		const { email, password } = data;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				setLoggedInUser({
					isLoggedIn: true,
				});
				history.replace(from);
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	};
	return (
		<Container>
			<Menu />
			<Form onSubmit={handleSubmit(handleLogIn)}>
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
					Log In
				</Button>
			</Form>
		</Container>
	);
};

export default LogIn;
