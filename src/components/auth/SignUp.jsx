import firebase from "firebase/app";
import "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import firebaseConfig from "./firebaseConfig";

if (!firebase.app.length) {
	firebase.app();
} else {
	firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
	const { register, handleSubmit, errors } = useForm();

	const handleSignUp = (data) => {
		const { email, password } = data;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				swal("Account created successfully.", "", "success");
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	};
	return (
		<Form onSubmit={handleSubmit(handleSignUp)}>
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
				{errors.name && <span className="text-danger">Password is required.</span>}
			</Form.Group>

			<Button variant="info" className="font-weight-bold" type="submit">
				Create New Account
			</Button>
		</Form>
	);
};

export default SignUp;
