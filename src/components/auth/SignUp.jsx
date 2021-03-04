import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
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

	const handleSignUp = (data, e) => {
		const { email, password } = data;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				swal("Account created successfully.", "", "success");
				setError("");
				e.target.reset();
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<>
			<Helmet>
				<title>Create Admin | Healthy Teeth</title>
			</Helmet>
			<Form onSubmit={handleSubmit(handleSignUp)} style={{ margin: "0 auto" }} className="w-75 bg-light mt-4 p-5">
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
				<Button variant="info" className="font-weight-bold float-right" type="submit">
					Create
				</Button>
			</Form>
		</>
	);
};

export default SignUp;
