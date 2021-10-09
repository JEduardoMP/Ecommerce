import { createContext, useReducer } from "react" 
import useFetchData from "../hooks/useFetchData";

const CommerceContext = createContext();

const initialState = {
    product: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'PRODUCT':
            return{
                ...state,
                product: [state.product, action.payload]
            }
        default:
            return state;
    }
}

export const CommerceContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {state, dispatch};

    const products = useFetchData('http://localhost:1337/products');
    dispatch({type: 'PRODUCT', payload: products})

    return(
        <CommerceContext.Provider value={data}>
            {children}
        </CommerceContext.Provider>
    )
}

export default CommerceContext;