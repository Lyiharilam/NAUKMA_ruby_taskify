import http from "../http-common";

const login = async (email, password) => {
    const response = await http
        .post("/auth/login", {
            email,
            password,
        });
    if (response.data.token || response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const register = (username, email, password) => {
    return http.post("/users", {
        username,
        email,
        password,
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    register,
    logout
};