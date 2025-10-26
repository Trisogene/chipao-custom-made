import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
	type TypedUseSelectorHook,
	useSelector as untypedUseSelector,
} from "react-redux";
import { appSlice } from "./slice/appSlice";

export const store = configureStore({
	reducer: {
		app: appSlice.reducer,
	},
});

setupListeners(store.dispatch);

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useRtk: TypedUseSelectorHook<ReduxState> = untypedUseSelector;
