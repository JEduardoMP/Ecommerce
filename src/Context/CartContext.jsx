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
            // console.log(action.payload)
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
        case 'SUBTRACTION':
            if(state.cart.some(element => element.values.id === action.payload.values.id)){
                return{
                    ...state,
                    totalPrice: state.totalPrice - action.payload.values.price,
                    cart: state.cart.filter(element => element.values.id === action.payload.values.id ? element.qty -= 1 : 'error' )
                }
            }else if (state.cart.some(element => element.qty === 0)){
                return{
                    ...state,
                    totalPrice: state.totalPrice - action.payload.values.price,
                    cart: state.cart.filter(element => element.values.id !== action.payload.values.id)
                }
            }
            break;
        case 'DELETE':
            return{
                ...state,
                totalPrice: state.totalPrice - action.payload.values.price * action.payload.qty,
                cart: state.cart.filter( product => product.values.id !== action.payload.values.id)
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