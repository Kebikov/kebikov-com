import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface IInitialState {
    lineHeader: boolean;
    activeMenu: boolean;
    activeSlidesReviews: number;

    nameShowImage?: string | number;
}

const initialState: IInitialState = {
    lineHeader: false,
    activeMenu: false,
    activeSlidesReviews: 0
};


const indexSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLineHeader: (state, action: PayloadAction<boolean>) => {
            state.lineHeader = action.payload;
        },
        setActiveMenu: (state, action) => {
            console.log(action.payload);
            state.activeMenu = action.payload;
        },
        setActiveSlidesReviews: (state, action) => {
            state.activeSlidesReviews = action.payload;
        },
        SET_SHOW_IMAGE: (state, actions: PayloadAction<number | string | undefined>) => {
            state.nameShowImage = actions.payload;
            console.log('actions.payload = ', actions.payload);
        }
    }
});


const {reducer, actions} = indexSlice;


export default reducer;
export const {
    setLineHeader,
    setActiveMenu,
    setActiveSlidesReviews,
    SET_SHOW_IMAGE
} = actions;