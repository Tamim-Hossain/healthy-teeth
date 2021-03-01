import Menu from "../../shared/Menu";
import BusinessInfo from "../main/BusinessInfo";
import "./Header.css";
import Main from "./Main";

const Header = () => {
	return (
		<main style={{ height: "700px" }}>
			<Menu />
			<Main />
			<BusinessInfo />
		</main>
	);
};

export default Header;
