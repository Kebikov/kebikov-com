const initialState = {
    lineHeader: false,
    activeMenu: false,
    activeSlidesReviews: 0
};

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SET_LINE_HEADER': 
            return {
                ...state,
                lineHeader: actions.payload
            }
        case 'SET_ACTIVE_MENU':
            return {
                ...state,
                activeMenu: actions.payload
            } 
        case 'SET_ACTIVE_SLIDES_REVIEWS':
            return {
                ...state,
                activeSlidesReviews: actions.payload
            } 
    
        default: return state;
    }
}

export default reducer;