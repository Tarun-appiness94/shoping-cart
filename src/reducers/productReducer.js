import { actionsType } from "../actions/actionsType"

const initialState = {
    products : [
        {
            id:1,
            name:"tarun",
            desc:"programmer"
        }
    ]
}

export const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionsType.SET_PRODUCTS:
            return{
                state
            };

        case actionsType.SELECTED_PRODUCT:
            return{
                state
            };
            
        default: return state;

    }

}