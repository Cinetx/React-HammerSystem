import fetch from 'auth/FetchInterceptor'

const userService = {}

userService.getUsersList = function () {
    return fetch({
        url: '/users',
        method: 'get',
    })
}

userService.getSelectedUser = function (id) {
    return fetch({
        url: `/users/${id}`,
        method: 'get',
    })
}

export default userService