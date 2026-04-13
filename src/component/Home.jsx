import { useContext } from "react";
import { Context } from "../context/AuthContext";

const Home = ()=> {

    const {userValid} = useContext(Context)

    return(
        <div>

        <h4>user is logged in : {userValid ? "True" : "False"}</h4>
            
        Welcome to the Home Page
  
            </div>
    )
}
export default Home;