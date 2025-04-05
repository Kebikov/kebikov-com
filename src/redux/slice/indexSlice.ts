import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type TTheme = 'light' | 'dark';

interface IInitialState {
    popupTheme: boolean;
    lineHeader: boolean;
    activeMenu: boolean;
    activeSlidesReviews: number;

    nameShowImage?: string | number;

    theme?: TTheme;
}


const initialState: IInitialState = {
    popupTheme: false,
    lineHeader: false,
    activeMenu: false,
    activeSlidesReviews: 0,
    theme: undefined
};


const indexSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLineHeader: (state, action: PayloadAction<boolean>) => {
            state.lineHeader = action.payload;
        },
        SET_ACTIVE_MENU: (state, action) => {
            state.activeMenu = action.payload;
        },
        setActiveSlidesReviews: (state, action) => {
            state.activeSlidesReviews = action.payload;
        },
        SET_SHOW_IMAGE: (state, actions: PayloadAction<number | string | undefined>) => {
            state.nameShowImage = actions.payload;
        },
        SET_THEME: (state, actions: PayloadAction<TTheme>) => {
            console.log('Текущяя тема = ', actions.payload);
            state.theme = actions.payload;
        },
        SET_POPUP_THEME: (state, actions: PayloadAction<boolean>) => {
            state.popupTheme = actions.payload;
        }
    }
});


const {reducer, actions} = indexSlice;


export default reducer;


export const {
    setLineHeader,
    SET_ACTIVE_MENU,
    setActiveSlidesReviews,
    SET_SHOW_IMAGE,
    SET_THEME,
    SET_POPUP_THEME
} = actions;