import "./CartItem.scss";
import {
	removeItems,
	increment,
	decrement,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ count, name, img, id, price }) => {
	const dispatch = useDispatch();
	return (
		<div className='cart__wrapper'>
			<button
				onClick={() => dispatch(removeItems(id))}
				className='cart__delete'>
				×
			</button>
			<div className='cart__nameAndImg'>
				<img className='cart__img' src={img} alt='' />
				<div className='cart__name'>{name}</div>
			</div>
			<div className='cart__counter'>
				<button
					onClick={() => dispatch(increment(id))}
					className='count__text inc'>
					-
				</button>
				<span className='count__text result'>{count}</span>
				<button
					onClick={() => dispatch(decrement(id))}
					className='count__text dec'>
					+
				</button>
			</div>
			<p className='cart__price'>{price * count}</p>
		</div>
	);
};

export default CartItem;
