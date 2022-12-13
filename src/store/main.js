import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo/store";

const reducers = combineReducers({
    todoSlice: todoSlice.reducer,
})

export default configureStore({
    reducer: reducers,
})