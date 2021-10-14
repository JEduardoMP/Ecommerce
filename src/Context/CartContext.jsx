import { createContext, useReducer } from "react"

const CartContext = createContext();

const initialState = {
    user: {},
    totalPrice: 0,
    cart: [],
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            console.log(action.payload)
            if(state.cart.some(product => product.values.id === action.payload.values.id)){
                return {
                    ...state,
                    totalPrice: state.totalPrice + action.payload.values.price,
                    cart: state.cart.filter(element => element.values.id === action.payload.values.id ? element.qty = element.qty + 1 : 'error')
                }
            }else{
                return{
                    ...state,
                    totalPrice: state.totalPrice + action.payload.values.price,
                    cart: [...state.cart, action.payload],
                }
            }
        default:
            return state;
    }
}

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {state, dispatch}

    return(
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContext;
export {CartContextProvider};