import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ea7e661d-f340-4c0e-b12e-b599197c412e'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getProfiles(userId = 21336,) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            });
    }
}