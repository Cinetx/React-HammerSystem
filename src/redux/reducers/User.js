import {USER_CONFIG} from 'configs/AppConfig'
import {IS_SELECTED_USER_LOAD, IS_USERS_LIST_LOAD, LOAD_SELECTED_USER, LOAD_USERS_LIST} from "../constants/User";

const initTheme = {
    ...USER_CONFIG
};

const user = (state = initTheme, action) => {
    switch (action.type) {
        case LOAD_USERS_LIST:
            return {
                ...state,
                usersList: action.payload
            };
        case IS_USERS_LIST_LOAD:
            return {
                ...state,
                isUsersListLoaded: action.payload
            }
        case LOAD_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.payload
            };
        case IS_SELECTED_USER_LOAD:
            return {
                ...state,
                isSelectedUserLoaded: action.payload
            }

        default:
            return state;
    }
};

export default user;