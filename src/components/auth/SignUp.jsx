import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
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
	const [error, setError] = useState("");

	const handleSignUp = (data) => {
		const { email, password } = data;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				setError("");
				swal("Account created successfully.", "", "success");
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	return (
		<Form
			onSubmit={handleSubmit(handleSignUp)}
			style={{ margin: "0 auto" }}
			className="w-75 shadow mt-4 p-5"
		>
			<h2 className="font-weight-bold text-info text-center">Create New Admin</h2>
			<hr className="mb-3" />
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

			{error && <p className="text-danger">{error}</p>}
			<Button variant="info" className="font-weight-bold" type="submit">
				Create
			</Button>
		</Form>
	);
};

export default SignUp;
