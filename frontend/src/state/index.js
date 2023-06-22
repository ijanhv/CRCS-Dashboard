 import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = {
    mode: "light",
    user: "admin",

};

export const global = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setMode, setUser } = global.actions;
export default global.reducer;