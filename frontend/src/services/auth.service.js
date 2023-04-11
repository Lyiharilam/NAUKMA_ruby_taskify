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

const register = async (username, email, password) => {
    let serverResponse = null
    const response = await http.post("/users", {
        username,
        email,
        password,
    }).catch(error => {
        serverResponse = { isError: true, message: error.response.data }
    });
    return serverResponse ? serverResponse : response;
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    register,
    logout
};