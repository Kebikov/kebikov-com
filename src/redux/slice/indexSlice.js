import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lineHeader: false,
    activeMenu: false,
    activeSlidesReviews: 0
};

const indexSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLineHeader: (state, action) => {
            state.lineHeader = action.payload;
        },
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload;
        },
        setActiveSlidesReviews: (state, action) => {
            state.activeSlidesReviews = action.payload;
        }
    }
});

const {reducer, actions} = indexSlice;

export default reducer;
export const {setLineHeader,setActiveMenu,setActiveSlidesReviews} = actions;