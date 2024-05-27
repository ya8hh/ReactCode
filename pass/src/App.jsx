import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setnumAllowed]=useState(false);
  const [charAllowed,setcharAllowed] =useState(false);
const [Password,setPassword]=useState("");
  //use ref
  const passwordRef= useRef(null)




const passwordGen = useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numAllowed) str+="0123456789"
  if (charAllowed) str+="!@#$%^&*()_+{}<>?"
  for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
    pass  += str.charAt(char)
   }
   setPassword(pass);

},[length,numAllowed,charAllowed,setPassword])
  useEffect(()=>{
    passwordGen()
  },[length,numAllowed,charAllowed,passwordGen])

  const copyPassClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(Password)

  },[Password])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700' >
    <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={Password} 
        className='outline-none w-full py-1 px-3'
        placeholder='Password '
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPassClip}
        
        >Copy</button>


      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          vlaue={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label >Length:{length}</label>

        </div>
        <div className='flex item-center gap-x-1'>
        <input type="checkbox"
          id="numberInput"
          
          onChange={()=> {setnumAllowed((prev)=>!prev)}}/>
          <label >Number</label>


        </div>
        <div className='flex item-center gap-x-1'>
        <input type="checkbox"
          id="characterInput"
          
          onChange={()=> {setcharAllowed((prev)=>!prev)}}/>
          <label >Character</label>


        </div>

      </div>
   </div>
    </>
  )
}

export default App
