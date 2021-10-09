import { useContext } from "react";
import CommerceContext from "../Context/CommerceContext";


const HomePage = () => {

    const { state } = useContext(CommerceContext);

    console.log(state)
    return(
        state && state.map( element => (
            <h4>{element.name}</h4>
        ))
    )
}

export default HomePage;