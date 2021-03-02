import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Appointment from "./components/appointment/Appointment";
import Home from "./components/home/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/appointment" component={Appointment} />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
