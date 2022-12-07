const initialState = {
    lineHeader: false
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
    
        default: return state;
    }
}

export default reducer;