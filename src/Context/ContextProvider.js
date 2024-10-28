import React,{useState} from "react";
import MyContext from "./CreateContext";

const MyContextProvider=({children})=>{

    // const [userData, setUserData] = useState({
    //     firstName:"",
    //     lastName:"",
    //     email:"",
    //     message:""
    // });

    const [userData, setUserData] = useState([]);


    return(
        <MyContext.Provider value={{userData, setUserData}}>
            {children}
        </MyContext.Provider>

    )

}

export default MyContextProvider;