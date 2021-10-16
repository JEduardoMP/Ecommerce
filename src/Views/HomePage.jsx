import { useContext } from "react";
import Product from "../Components/Product";
import CommerceContext from "../Context/CommerceContext";


const HomePage = () => {

    const { state } = useContext(CommerceContext);
    // console.log(state)
    // const man = useMemo(() => state)
    
    return(
        state && state.product.map(product => (
                <Product value={product} key={product.id}/>
            )
        )
    )
    
}

export default HomePage;