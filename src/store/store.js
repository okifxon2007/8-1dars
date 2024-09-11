import { configureStore } from "@reduxjs/toolkit"; 
import { userReducer } from "../store/userSlice.js";
import darkReduser from "../store/darkSlice.js"

const store = configureStore({
    reducer: {
        user: userReducer,
        dark: darkReduser
    }
});

export default store;
