const imagesReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return action.data    
        default:
            return state;
    }
}

export default imagesReducer;