import http from "../http-common";
import { authHeader } from "../utils/utils"

const createProduct = (formValues) => {
    return http.post("/good", formValues, { headers: authHeader() });
};

const fetchAllProducts = (filters) => {
    if (filters) {
        return http.get("/good" + `?${filters}`, { headers: authHeader() });
    } else {
        return http.get("/good", { headers: authHeader() });
    }
};

const fetchProductById = (id) => {
    return http.get("/good" + `/${id}`, { headers: authHeader() });
};

const updateProduct = (formValues, id) => {
    return http.put("/good" + `/${id}`, formValues, { headers: authHeader() });
};

const deleteProduct = (id) => {
    return http.delete("/good" + `/${id}`, { headers: authHeader() });
};

export default {
    createProduct, fetchAllProducts, updateProduct, deleteProduct, fetchProductById
};