import http from "../http-common";
import { authHeader } from "../utils/utils"

const createCategory = (formValues) => {
    return http.post("/category", formValues, { headers: authHeader() });
};

const fetchAllCategories = () => {
    return http.get("/category", { headers: authHeader() });
};

const updateCategory = (formValues, id) => {
    return http.put("/category" + `/${id}`, formValues, { headers: authHeader() });
};

const deleteCategory = (id) => {
    return http.delete("/category" + `/${id}`, { headers: authHeader() });
};

const fetchAllProductsByCategory = (id) => {
    return http.get("/category" + `/${id}` + "/goods", { headers: authHeader() });
};

export default {
    createCategory, fetchAllCategories, updateCategory, deleteCategory, fetchAllProductsByCategory
};