import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type TTheme = 'light' | 'dark';


interface IInitialState {
    lineHeader: boolean;
    activeMenu: boolean;
    activeSlidesReviews: number;

    nameShowImage?: string | number;

    theme: TTheme;
}

const initialState: IInitialState = {
    lineHeader: false,
    activeMenu: false,
    activeSlidesReviews: 0,
    theme: 'light'
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
    SET_THEME
} = actions;