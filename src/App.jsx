import { createContext, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Appointment from "./components/appointment/Appointment";
import LogIn from "./components/auth/LogIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import Home from "./components/home/Home";

export const UserContext = createContext();

const App = () => {
	const [loggedInUser, setLoggedInUser] = useState({
		isLoggedIn: localStorage.getItem("isLoggedIn") || false,
	});

	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/appointment" component={Appointment} />
					<Route path="/login" component={LogIn} />
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
