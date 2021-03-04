import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Menu from "../shared/Menu";

const LogIn = () => {
	const { register, handleSubmit, errors } = useForm();
	const [, setLoggedInUser] = useContext(UserContext);
	const [error, setError] = useState("");
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
				setError("");
				localStorage.setItem("isLoggedIn", true);
				history.replace(from);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<Container>
			<Helmet>
				<title>Admin Log In | Healthy Teeth</title>
			</Helmet>
			<Menu />
			<Form onSubmit={handleSubmit(handleLogIn)} style={{ margin: "0 auto" }} className="w-50 shadow mt-4 p-5">
				<h2 className="font-weight-bold text-info text-center">Admin Log In</h2>
				<hr className="mb-3" />
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						placeholder="Enter Email Address"
						type="email"
						name="email"
						ref={register({ required: true })}
						defaultValue="admin@healthy-teeth.web.app"
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
						defaultValue="admin000"
					/>
					{errors.password && <span className="text-danger">Password is required.</span>}
				</Form.Group>
				{error && <p className="text-danger">{error}</p>}
				<Button variant="info" className="font-weight-bold" type="submit">
					Log In
				</Button>
			</Form>
		</Container>
	);
};

export default LogIn;
