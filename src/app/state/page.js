'use client';
import { useState} from 'react';

export default function services(){
    const [count,setCount]= useState(0);
    return(
        <div class="min-h-screen bg-gray-50 flex flex-col i px-4 items-center">
                <h1 className="text-black text-4xl font-bold text-center mb-2 mt-8 ">State</h1>
                <p className='text-grey mt-2 text-1xl text-center '>How to use state in React.</p>
            <div class="bg-white rounded-lg shadow p-6 w-full max-w-sm  mt-5 ">
                <h2 className="text-xl font-semibold mb-4">Counter Component</h2>
                <p className="text-lg font-bold text-blue-600 mb-4">Count: {count}</p>
                <div className='flex justify-center gap-3'>
                    <button onClick={()=> setCount(count+1)} className='bg-blue-500  text-white px-4 py-2 reounded hover:bg-blue-600 rounded'>
                        Increase
                    </button>
                    <button onClick={()=> setCount(count-1)} className='bg-red-500 text-white px-4 py-2 reounded hover:bg-red-600 rounded'>
                        Decrease
                    </button>
                    <button onClick={()=> setCount(0)} className='bg-blue-500 text-white px-4 py-2 reounded hover:bg-blue-600 rounded'>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
