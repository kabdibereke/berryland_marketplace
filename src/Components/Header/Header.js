import "./Header.scss";
import logo from "../assets/img/logo.svg";
import cart from "../assets/icon/ShoppingCart.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<Link to={"/"}>
						<img className='header__logo' src={logo} alt='logo' />
					</Link>
					<Link to={"/cart"} className='header__cart'>
						<img className='header__cart__img' src={cart} alt='cart' />
						<span className='header__cart__counter'>{cartItems.length}</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
