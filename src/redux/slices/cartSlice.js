import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.cartItems = state.cartItems.map((item) => {
				if (item.id == action.payload) {
					if (item.count > 1) {
						return { ...item, count: item.count - 1 };
					} else {
						return item;
					}
				} else {
					return item;
				}
			});
		},
		decrement: (state, action) => {
			state.cartItems = state.cartItems.map((item) => {
				if (item.id == action.payload) {
					if (item.count < 5) {
						return { ...item, count: item.count + 1 };
					} else {
						return item;
					}
				} else {
					return item;
				}
			});
		},
		addItems: (state, action) => {
			if (state.cartItems.find((obj) => obj.id === action.payload.id)) {
				return;
			} else {
				state.cartItems.push({
					...action.payload,
				});
			}
		},
		removeItems: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload,
			);
		},
		deleteItems: (state) => {
			state.cartItems = [];
		},
	},
});

export const { increment, decrement, addItems, removeItems, deleteItems } =
	cartSlice.actions;

export default cartSlice.reducer;
