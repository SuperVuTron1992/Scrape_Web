import './index.css';
import React from 'react';
import {Button} from "@material-tailwind/react";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function MainPage() {
  const[UserWebsite, setWebsite] = useState("");
  let navigate = useNavigate("");

  // Check the input that the user input information via check submit button 
  const GoButton = () =>{
    if (UserWebsite === "yes.com") {
        console.log("This is a website!");
            } else{
        console.log("This is not a website!");
  } 
} 

  return (
    <div className= "grid h-screen place-content-center">
        <div className= "text-center text-3xl font-bold text-blue-600 m-10"> {/*Position, Text, Margin*/}
            <h1>Mining Links</h1>
        </div>

      {/*Link Box*/}
    <div>
        <span className="">
                <input className   = "h-16 w-80 border-solid border-2 border-black placeholder pl-[10px]"
                    placeholder = "Links" onChange={(event) => setWebsite(event.target.value)}/> {/*Sizing, Borders, Placeholder*/}
        </span>
        <span className="ml-5">
                <Button variant="filled"  color ="green" onClick={GoButton}>Go!</Button>
        </span>
    </div>
</div>
  );
}

export default  MainPage;