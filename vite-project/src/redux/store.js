import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./jobsSlice";


const store=configureStore({reducer})

// console.log(store);
export default store