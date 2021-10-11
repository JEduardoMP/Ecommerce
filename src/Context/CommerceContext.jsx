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
                product: [...state.product, action.payload]
            };
        // case 'MODIFY_STOCK':
            // return{
            //     ...state,
            //     product: state.product.id === action.payload.id ? state.product.stock-- : 
            // }
        default:
            return state;
    }
}

const CommerceContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const handleInfo = async() => {
            try{
                const response = await fetch('http://localhost:1337/products');
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