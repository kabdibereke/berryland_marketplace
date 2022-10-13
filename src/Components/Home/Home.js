import "./Home.scss";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/slices/itemSlice";
import { setCategoryId } from "../../redux/slices/filterSlice";
import Skeleton from "../assets/Skeleton";
const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.data.items);
	const status = useSelector((state) => state.data.status);
	const btn = ["Все продукты", "Ягоды", "Суперфуд"];
	const categoryId = useSelector((state) => state.filters.categoryId);
	useEffect(() => {
		dispatch(fetchItems({ categoryId }));
	}, [categoryId]);

	return (
		<section className='home'>
			<div className='container'>
				<h2 className='home__title'>Доставка на дом</h2>
				<div className='home__tabs'>
					{btn.map((item, index) => {
						return (
							<button
								key={index}
								onClick={() => dispatch(setCategoryId(index))}
								className={
									categoryId === index ? "home__btn active" : "home__btn"
								}>
								{item}
							</button>
						);
					})}
				</div>
				{status === "error" && (
					<div className='home__error'>
						Что то пошло не так и данные не загрузились! Попробуйте обновить
						страницу!
					</div>
				)}
				<div className='home__item__wrapper'>
					{status == "loading"
						? [1, 2, 3, 4].map((item) => {
								return <Skeleton key={item} />;
						  })
						: items?.map((item) => {
								return (
									<Item
										key={item.id}
										name={item.name}
										img={item.image}
										price={item.price}
										count={item.count}
										id={item.id}
									/>
								);
						  })}
				</div>
			</div>
		</section>
	);
};

export default Home;
