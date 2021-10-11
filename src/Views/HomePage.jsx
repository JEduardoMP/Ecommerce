import { useContext } from "react";
import Product from "../Components/Product";
import CommerceContext from "../Context/CommerceContext";


const HomePage = () => {

    const { state } = useContext(CommerceContext);
    // console.log(state.product)

    return(
        state && state.product && state.product.map(product => (
            product.map( element => (
                <Product value={element} key={element.id}/>
            ))
        ))
    )
}

export default HomePage;