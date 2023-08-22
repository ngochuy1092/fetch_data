import React from "react";
import { useState } from "react";
import Axios from "axios";

export default function App() {
  let input;
  const[infor, setInfor]=useState("")

  const fetchData= ()=> {
    console.log(input);
    Axios.get(`https://api.agify.io/?name=${input}`).then (
      (res)=> {
        console.log(res.data);
        setInfor(res.data);
      }
    )
  }
  return (
    <div>
      <input type="text" placeholder="Write your name" onChange={
        (event)=> {input= (event.target.value);}        
      } />
      <button onClick={fetchData}>Predict age</button>
      <h1>name:{infor.name}</h1>
      <h1>age:{infor.age}</h1>
      <h1>count:{infor.count}</h1>
      <h1></h1>
    </div>
  )
}