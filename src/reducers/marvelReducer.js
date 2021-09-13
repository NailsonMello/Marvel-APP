import ActionType from '../utils/actionType'

const INITIAL_STATE = {
    list: [],
    listStorage: [],
}

function marvelReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ActionType.FETCH:
            return {
                ...state,
                list: action.payload.results
            }
        case ActionType.PAGINATION:
            return {
                ...state,
                list: [...state.list, ...action.payload.results]
            }
        case ActionType.FETCH_STORAGE:
            return {
                ...state,
                listStorage: action.payload
            }
        default:
            return state
    }
}

export default marvelReducer