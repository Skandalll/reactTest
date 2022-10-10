import NotFoundBlock from "../components/NotFound";
import {Link} from "react-router-dom";
export const NotFound = ()=>{
    return (
        <>
        <NotFoundBlock/>
        <Link to="/"><button>Назад</button></Link>
        </>
    )
}
