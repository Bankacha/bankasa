import { products } from "../../data/products";

const initialState = {
    products: products,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}


export default productsReducer;