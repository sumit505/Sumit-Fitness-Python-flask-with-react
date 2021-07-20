import { utilActions } from '../constants/utilActionTypes'

const initialState = {
    isLoggedIn: false,
}

export const utilReducer = (state = initialState, action) => {
    switch (action.type) {
        case utilActions.CHANGE_LOGIN_STATUS:
            return {...state, isLoggedIn: action.payload}
        default:
            return state
    }
}

