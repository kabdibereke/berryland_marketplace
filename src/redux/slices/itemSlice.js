import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchItems = createAsyncThunk(
	"berry/fetchItemsStatus",
	async ({ categoryId }) => {
		const res = await fetch(
			categoryId === 0
				? `https://6342dda3ba4478d478440a07.mockapi.io/name`
				: `https://6342dda3ba4478d478440a07.mockapi.io/name?category=${categoryId}`,
		);

		return res.json();
	},
);
const initialState = {
	items: [],
	status: "loading", //loading|error|success
	cartItems: [],
};

export const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.items = state.items.map((item) => {
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
			state.items = state.items.map((item) => {
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
	},
	extraReducers: {
		[fetchItems.pending]: (state) => {
			state.status = "loading";
			state.items = [];
		},
		[fetchItems.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = "success";
		},
		[fetchItems.rejected]: (state) => {
			state.status = "error";
			state.items = [];
		},
	},
});

export const { increment, decrement } = itemSlice.actions;

export default itemSlice.reducer;
