'use client';
// import { useState } from "react";
import { useState, useEffect } from "react";

export default function userform(){
    const [name, setName]=useState('');
    const [email,setEmail ] =useState ('');
    const [phoneno, setNum] =useState ('');

    return(
        <div className=" m-auto w-1/4 flex flex-col items-center justify-center h-screen ">
            <input  className=" shadow apperance-none border rounded w-full py-2 px-3 text-grey-6700 leading-tight focus:outine-none focus:shadow-outline m-3" type="text" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter your name "/>
            <input className="shadow apperance-none border rounded w-full py-2 px-3 text-grey-6700 leading-tight focus:outine-none focus:shadow-outline m-3" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
            <input className="shadow apperance-none border rounded w-full py-2 px-3 text-grey-6700 leading-tight focus:outine-none focus:shadow-outline m-3" type="tel" value={phoneno} onChange={(e)=>setNum(e.target.value)} placeholder="Enter your phone number"/>
            {name && (
                <p className="text-center text-gray-600 mt-6">Hello, <span className="font-bold">{name}</span>!</p>
            )}
            {email && (
                <p className="text-center text-gray-600 mt-6">Email: <span className="font-bold">{email}</span></p>
            )}
            {phoneno && (
                <p className="text-center text-gray-600 mt-6">Phone Number:<span className="font-bold">{phoneno}</span> </p>
            )}
        </div>

    )
}