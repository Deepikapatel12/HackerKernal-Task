import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const DashBoard=()=>{
const [username, setUsername]= useState("");
const [useremail, setUseremail]=useState("");
const navigate= useNavigate();

 useEffect(()=>{
    const userName= localStorage.getItem("name");
    const userEmail= localStorage.getItem("email");
    
    if (!userName)
    {
      navigate("/login");
    }


    setUsername(userName);
    setUseremail(userEmail);
 }, [])


 


    return(
        <>
          <h1> User DashBoard</h1>
          
          
        </>
    )
}
export default DashBoard;