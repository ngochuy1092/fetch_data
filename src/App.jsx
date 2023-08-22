import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const[catFact, setCatFact]= useState("");

  useEffect(()=> {
    console.log('hi');
    Axios.get("https://catfact.ninja/fact").then((res)=> {
      console.log(res.data.fact);
      setCatFact(res.data.fact);
    })
  },[])

  console.log('hi1');
  return(
    <div>
      <button> Generate Cat Fact</button>
      <h1>{catFact}</h1>
    </div> 
  )
} 