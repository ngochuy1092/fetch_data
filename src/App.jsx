import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const[catFact, setCatFact]= useState("");
  const fetchData =()=> {
    Axios.get("https://catfact.ninja/fact").then(res=> {
      setCatFact(res.data.fact);
    })
  }

  useEffect(
    ()=> {
      fetchData();
    }, []
  )

  console.log('hi1');
  return(
    <div>
      <button onClick={fetchData}> Generate Cat Fact</button>
      <h1>{catFact}</h1>
    </div>
  )
} 
