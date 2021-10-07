import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "a7dc3369-096a-4e00-87f4-8069bcec5513" },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`, {}).then((response) => response.data);
    },

    unfollow(id) {       
        return instance.delete(`follow/${id}`, {}).then((response) => response.data);
    },
};
