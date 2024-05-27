import { useState } from "react";

/* <div className="w-4/5 place-content-baseline bg-white rounded-2xl"></div> */
 function MyButton() {
    const [color,setColor] =useState("olive")

 const setRed =()=>{
    setColor("red")
 }



    return (
      

      <div className=" flex w-full h-screen duration-200 justify-center " style={{backgroundColor:color}}>
      
       <div className="insert-x-0 px-2 fixed   h-10 p-1 flex gap-3  flex-wrap bottom-12 justify-center  bg-black rounded-xl" >
        
        
        
        <button onClick={()=>setColor("red")} className="bg-red-500 rounded-lg p-1 w-16"> Red</button>
        <button  onClick={()=>setColor("green")} className="bg-green-500 rounded-lg p-1 w-16"> Green</button>
        <button onClick={()=>setColor("blue")} className="bg-blue-500 rounded-lg p-1 w-16"> Blue</button>
        <button  onClick={()=>setColor("olive")}className="bg-green-800 rounded-lg p-1 w-16"> Olive</button>
        <button onClick={()=>setColor("grey")}  className="bg-slate-500 rounded-lg p-1 w-16"> Grey</button>
        
        </div> 
        </div>  
      
      
      
    );
  }
  export default MyButton