import { utilActions } from '../constants/utilActionTypes'

export const changeLoginStatus = (status) => {
    return {
        type: utilActions.CHANGE_LOGIN_STATUS,
        info: "Change login status",
        payload: status
    }
}