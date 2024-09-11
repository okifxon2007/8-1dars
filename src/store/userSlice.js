import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { Name: "okifxon", Surname: "Shokirjonov", Age: 20, id: Date.now() }
];

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        add: (state, action) => {
           
            return [...state, action.payload];
        }
    }
});

export const { add } = userSlice.actions;  
export const userReducer = userSlice.reducer;
