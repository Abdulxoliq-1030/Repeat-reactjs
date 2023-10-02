type InitialState = {
    count: number
}

const initialState: InitialState = { count: 0 }

const reducer = (state: any, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
            return state
    }
}


export { initialState, reducer }