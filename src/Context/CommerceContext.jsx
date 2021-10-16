import { createContext, useEffect, useReducer } from "react" 

const CommerceContext = createContext();

const initialState = {
    product: []
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'PRODUCT':
            return{
                ...state,
                product: action.payload
            };
        case 'MODIFY_STOCK':
            return {
                ...state,
                product: state.product.filter(element => element.id === action.payload.id ? element.stock -=  1 : 'error')
            }
        case 'UPDATE':
            return{
                ...state,
                product: state.product.filter(element => element.id === action.payload.id ? element.stock = element.stock + 1 : 'error')
            }
        default:
            return state;
    }
}

const CommerceContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const handleInfo = async() => {
            try{
                const response = await fetch('https://ecommerce-jose.herokuapp.com/products');
                const result = await response.json();
                dispatch({type: 'PRODUCT', payload: result})
            }catch(error){
                console.log(error);
            }
        };
        handleInfo();
    }, [])

    const data = {state, dispatch};

    return(
        <CommerceContext.Provider value={data}>
            {children}
        </CommerceContext.Provider>
    )
}

export default CommerceContext;
export {CommerceContextProvider}