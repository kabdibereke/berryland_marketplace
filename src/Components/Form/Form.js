import { useState } from "react";
import "./Form.scss";
import { useSelector, useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { deleteItems } from "../../redux/slices/cartSlice";
import swal from "sweetalert";
const Form = ({ setLoading, loading }) => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [comment, seComment] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cartItems.cartItems);
	const totalPrice = cartItems.reduce(
		(sum, obj) => obj.price * obj.count + sum,
		0,
	);

	var obj = {
		message: JSON.stringify(cartItems),
		address,
		name,
		phone,
		comment,
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send("service_n336yno", "template_c199wus", obj, "WDejzSAbLUCwQnBoy")
			.then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
					setLoading(false);
					swal("Отправлено", {
						button: false,
					});
					setTimeout(() => {
						navigate("/");
						dispatch(deleteItems());
					}, 1000);
				},
				function (error) {
					console.log("FAILED...", error);
					swal("Что то пошло не так хз", {
						button: false,
					});
					setLoading(false);
				},
			);
	};
	return (
		<div className='form__wrapper'>
			<form onSubmit={sendEmail}>
				<input
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder='Имя'
					required
					name='name'
				/>
				<input
					onChange={(e) => setPhone(e.target.value)}
					type='phone'
					placeholder='Телефон'
					required
					name='phone'
				/>
				<input
					onChange={(e) => setAddress(e.target.value)}
					type='text'
					placeholder='Адрес доставки'
					name='address'
					required
				/>
				<textarea
					onChange={(e) => seComment(e.target.value)}
					placeholder='Коментарии'
					name='comment'></textarea>
				<p className='from__price'>Общая цена:{totalPrice}</p>
				<button className='from__btn' type='submit'>
					Отправить форму
				</button>
			</form>
		</div>
	);
};

export default Form;
