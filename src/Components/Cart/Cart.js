import "./Cart.scss";
import Form from "../Form/Form";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems } from "../../redux/slices/cartSlice";
const Cart = () => {
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	const dispatch = useDispatch();
	return (
		<div className='cart'>
			{cartItems.length == 0 ? (
				<div className='container cart__container'>
					<div className='cart__empty'>Ваша корзина пустая</div>
				</div>
			) : (
				<div className='container cart__container'>
					<div className='cart__row'>
						{cartItems.map((item) => {
							return (
								<CartItem
									key={item.id}
									count={item.count}
									name={item.name}
									img={item.img}
									id={item.id}
									price={item.price}
								/>
							);
						})}
						<button
							onClick={() => dispatch(deleteItems())}
							className='cart__btn'>
							очистить корзину
						</button>
					</div>
					<Form />
				</div>
			)}
		</div>
	);
};

export default Cart;
