import axios from "axios";

export const BASE_URL = "https://fakestoreapi.com/"

export const ENDPOINTS = {
    PRODUCTS:'products',
    JEWELERY:'products/category/jewelery',
    CATEGORIES:'products/categories',
    ELECTRONICS:'products/category/electronics',
    MENSCLOTHING:"products/category/men's clothing",
    WOMENSCLOTHING:"products/category/women's clothing"
    

}

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint;
    return{
        fetchAll: () => axios.get(url)
    }
}