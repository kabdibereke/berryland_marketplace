import "./Cart.scss";
import Form from "../Form/Form";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItems } from "../../redux/slices/cartSlice";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Cart = () => {
	const [loading, setLoading] = useState(false);
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	const dispatch = useDispatch();
	useEffect(() => {
		if (loading) {
			window.scrollTo(0, 500);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [loading]);
	return (
		<div className='cart'>
			{cartItems.length == 0 ? (
				<div className='container cart__container'>
					<div className='cart__empty'>Ваша корзина пустая</div>
				</div>
			) : (
				<>
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
						<Form setLoading={setLoading} loading={loading} />
					</div>

					{loading && (
						<div className='spinner'>
							<ClipLoader color='#36d7b7' size={300} />
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Cart;
