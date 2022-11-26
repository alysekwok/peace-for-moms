import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
  },
  middleware: (getDefault) =>
    getDefault({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }).concat([]),
});

setupListeners(store.dispatch);

export type AppRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
