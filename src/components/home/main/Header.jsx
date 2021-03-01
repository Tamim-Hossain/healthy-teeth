import Menu from "../../shared/Menu";
import BusinessInfo from "../main/BusinessInfo";
import Main from "./Main";
import "./Header.css";

const Header = () => {
	return (
		<main style={{ height: "600px" }}>
			<Menu />
			<Main />
			<BusinessInfo />
		</main>
	);
};

export default Header;
