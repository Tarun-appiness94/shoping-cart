import {actionsType} from "./actionsType";

export const setProducts = (products) => {
    return {
        type : actionsType.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProducts = (product) => {
    return {
        type : actionsType.SELECTED_PRODUCT,
        payload : product
    }
}

// export const removeSelectedProducts = (product) => {
//     return {
//         type : actionsType.REMOVE_SELECTED_PRODUCT,
//         payload : products
//     }
// }
