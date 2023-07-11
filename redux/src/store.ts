import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const rootReducer = createSlice({
  initialState: {
    count: 1,
    input: "123123",
  },
  name: "root",
  reducers: {
    addCount: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    editInput: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        input: action.payload,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    root: rootReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
