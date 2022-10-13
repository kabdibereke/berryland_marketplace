import "./Item.scss";
import { decrement } from "../../redux/slices/itemSlice";
import { increment } from "../../redux/slices/itemSlice";
import { addItems } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const Item = ({ name, img, price, count, id }) => {
	const dispatch = useDispatch();
	return (
		<div className='item'>
			<h3 className='item__title'>{name}</h3>
			<img className='item__img' src={img} alt='img' />
			<div className='item__price'>
				<span className='price__text price'>{price * count}kzt</span>
				<span className='price__text weight'>за 2.5 кг</span>
			</div>
			<div className='item__cart'>
				<div className='count'>
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
				<button
					onClick={() => dispatch(addItems({ id, name, img, price, count }))}
					className='btn_to_cart'>
					В корзину
				</button>
			</div>
		</div>
	);
};

export default Item;
