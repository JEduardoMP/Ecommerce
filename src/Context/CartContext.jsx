import { createContext, useReducer } from "react"

const CartContext = createContext();

const initialState = {
    user: {},
    totalPrice: 0,
    cart: []
}

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {state, dispatch}

    return(
    <CartContextProvider.provider value={data}>
        {children}
    </CartContextProvider.provider>
    )
}

export default CartContext;