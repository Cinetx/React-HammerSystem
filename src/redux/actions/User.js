import {IS_SELECTED_USER_LOAD, IS_USERS_LIST_LOAD, LOAD_SELECTED_USER, LOAD_USERS_LIST} from "../constants/User";
import userService from "../../services/UserServices";

export function loadUsersList(usersList) {
    return {
        type: LOAD_USERS_LIST,
        payload: usersList
    };
}
export function isLoadUsersList(isUserListLoaded) {
    return {
        type: IS_USERS_LIST_LOAD,
        payload: isUserListLoaded
    };
}

export function loadSelectedUser(selectedUser) {
    return {
        type: LOAD_SELECTED_USER,
        payload: selectedUser
    };
}
export function isSelectedUserLoaded(isSelectedUserLoaded) {
    return {
        type: IS_SELECTED_USER_LOAD,
        payload: isSelectedUserLoaded
    };
}

export function fetchUsersList() {
    return (dispatch) => {
        userService.getUsersList()
            .then((users) => {
                dispatch(loadUsersList(users))
                dispatch(isLoadUsersList(true))
            })
    };
}

export function fetchSelectedUser(id) {
    return (dispatch) => {
        userService.getSelectedUser(id)
            .then((user) => {
                dispatch(loadSelectedUser(user))
                dispatch(isSelectedUserLoaded(true))
            })
    };
}
