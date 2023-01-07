const initiliState = {
    mode: "light"
}


const global = (state = initiliState, action) => {
    if (action.type === "mode") {
        return {
            ...state,
            mode: action.payload
        }
    }
    return state
}

export default global