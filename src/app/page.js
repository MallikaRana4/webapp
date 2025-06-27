'use client';
// import Image from "next/image";
// import Button from "../components/Button";
import { useState,useEffect } from "react";

export default function Home() {
  const [count, setCount]=useState(0);
  useEffect(()=>{
    document.title=`You clicked ${count} times`;
  },[count]);
  return (
    <div className="items-center flex flex-col items-center justify-center ">
      <button onClick={()=>setCount (count+1)}>Click me </button>
      {/* <h1>Hello World!</h1>
      <h5>World!</h5> */}
      {/* <h1>This is home page.</h1>
      <Button text="Inquiry" className="bg-red-500 text-white px-15 rounded-2xl font-sans text-base"/>
      <Button text="Contact Us" className="bg-black text-white px-4 rounded-2xl font-sans text-base"/> 
      <Button text="Contact Us 2" className="bg-blue-500 text-white px-4 rounded-2xl font-sans text-base"/>  */}
    </div>
  );
}
