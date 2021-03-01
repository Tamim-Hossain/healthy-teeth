import Menu from "../shared/Menu";
import BusinessInfo from "./BusinessInfo";
import "./Header.css";
import Main from "./Main";

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
