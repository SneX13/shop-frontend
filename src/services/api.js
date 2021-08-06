import http from "../api-common";

class ProductDataService {
    getAll() {
        return http.get("/products/.json");
    }

    get(id) {
        return http.get(`/products/${id}.json`);
    }

    create(data) {
        return http.post("/products.json", data);
    }

    update(id, data) {
        return http.put(`/products/${id}.json`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}.json`);
    }
}

export default new ProductDataService();