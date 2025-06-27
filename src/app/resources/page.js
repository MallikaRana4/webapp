'use client';
import { useState,useEffect } from "react";

export default function resources(){
    const [items, setItems]=useState([]);
    const [resource, setResource]=useState('posts');
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response=> response.json())
        .then(data => setItems(data));
        // return()=> {
        //     setItems([]);
        // };
        // console.log(resource);
        // return()=>{
        //     console.log('Cleaned up function')
        // };
    });
    return(
        // <div className="flex min-h-screen flex-col items-center p-12 bg-gray-100 w-1/2 mx-auto mt-10">
        <div className=" items-center p-12 bg-gray-100 w-1/2 mx-auto mt-10" >
            <button className="bg-blue-500 mr-2 text-white px-4 py-2 rounded-md " onClick={()=> setResource ('posts')}>Posts</button>
            <button className="bg-red-500 mr-2 text-white px-4 py-2 rounded-md " onClick={()=> setResource ('users')}>Users</button>
            <button className="bg-red-500 mr-2 text-white px-4 py-2 rounded-md " onClick={()=> setResource ('comments')}>Comments</button>
            <ul className="grid gap-4">
                {items.map((item)=>(
                    <li key={item.id} className="bg-white rounded-lg shadow p-3 mb-2">
                        <h1 className="text-xl font-bold font-sans">
                            {resource=='posts'
                                ? item.title
                                :resource =="users"
                                ?item.name 
                                :item.name}
                        </h1>
                        <p className="text-gray-600">{item.body}</p>
                    </li>
                ))}
            </ul> 
            {/* {JSON.stringify(items) } */}
            {/* <h1 className="text-xl font-bold mb-4 font-sans">Resources</h1>
            <ul className="grid gap-4">
                {items.map((item)=>(
                    <li key={item.id} className="bg-white rounded-lg shadow p-3 mb-2">
                        <h1 className="text-xl font-bold font-sans">{item.title}</h1>
                        <p className="text-gray-600">{item.body}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}