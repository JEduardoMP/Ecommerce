import { useContext } from "react";
import Product from "../Components/Product";
import CommerceContext from "../Context/CommerceContext";


const HomePage = () => {

    const { state } = useContext(CommerceContext);

    console.log(state)
    return(
        state && state.map( element => (
            <Product></Product>
        ))
    )
}

export default HomePage;