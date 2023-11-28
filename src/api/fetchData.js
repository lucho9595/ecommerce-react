import axios from "axios";

export async function getAll() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const info = await response.data;
        return info;
    } catch (error) {
        console.log("The error is this:", error);
    }
}

export async function getProduct(id) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const info = await response.data;
        return info;
    }
    catch (error) {
        console.log("The error is this:", error);
    }
}
