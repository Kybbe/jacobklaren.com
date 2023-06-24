import { configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import uiSlice from "./slices/uiSlice";

const persistConfig = {
	key: "root",
	storage,
};

const persistedUiReducer = persistReducer(persistConfig, uiSlice.reducer);

export const store = configureStore({
	reducer: {
		ui: persistedUiReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
