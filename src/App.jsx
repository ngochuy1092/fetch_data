import React from "react";
import { useState } from "react";
import Axios from "axios";

export default function App() {
  const[party, setParty]=useState(null);

  const fetchParty= (name)=> {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}/`).then (
      (res)=> {
        setParty(res.data[0]);
      }
    )
  }

  return (
    <div>
      <button onClick={()=>fetchParty("party")}>Party</button>
      <button onClick={()=>fetchParty("family")}> Family </button>
      <button onClick={()=>fetchParty("office")}>Office</button>
      <h1>{party?.excuse}</h1>
    </div>
  )
}