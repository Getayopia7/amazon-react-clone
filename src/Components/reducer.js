
export const initialState = {
    basket:[],
    user:null,
};
/// reducer is the listener which call in index js, of 
// once send the message by dispatcher to the state provider layer reducer component will listen
const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            let newBasket=[...state.basket];
            if (index>=0){
                newBasket.splice(index,1);
            } 
            
            return {
                ...state,
                basket:newBasket,
            };
        case 'EMPTY_BASKET':
                return {
                    ...state,
                    basket:[]
                }

        case 'SET_USER':
            return {
                ...state,
                user:action.user,
            }
        default: 
        return state;

    }
}
export default reducer;