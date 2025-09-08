
import { useState } from "react";

// function Rani(){
//      const [count, setCount] = useState(0);
//      return(
//           <>
//           <div>
//                <p>Count : {count}</p>
//                <button onClick={()=>setCount(count + 1)}>+</button>
//                <button onClick={()=> setCount(count - 1)}>-</button>
//           </div>
//           </>
//      )
// }

// function Rani(){
//      const [text, setText] = useState("Hello!")
//      return(
//           <>
//           <div>
//                <p>{text}</p>
//                <button onClick={()=>setText("Goodbye!")}>button</button>
//           </div>
//           </>
//      )
// }

// function Rani(){
//      const [bulb, setBulb] = useState(false)
//      return(
//           <>
//           <div>
//                <button onClick={()=>setBulb(!bulb)}>{bulb ? "turn of": "turn on"}</button>
//           </div>
//           </>
//      )
// }

// function Rani(){
//      const[ text, setText] = useState("")

//      function rani(e){
//           e.preventDefault();
//           setText(e.target.value);
//      }

//      return(
//           <>
//           <div>
//                <input type="text" onChange={rani} placeholder="type here"/>
//                <p>you typed : {text}</p>
//           </div>
//           </>
//      )
// }

// function Rani(){
//      const [pass, setPassword] = useState("");

//      const[wor, setwork] = useState(false)

//      function rani(e){
//           // e.preventDefault();
//           setPassword(e.target.value)

//      }

//      return(
//           <>
//           <div>
          
//                <input type={wor ? "text" : "password"} placeholder="enter your Password :" onChange={rani} value={pass} />
//                <button type="button" onClick={()=> setwork(!wor)}>{wor ? "show": "hide"}</button>
//                <button type="submit">button</button>
//                <p>Enter Password: {pass}</p>

               
//           </div>
//           </>
//      )
// }

function Rani(){
     const[color, setColor] = useState("");
     setColor

     return(
          <>
          <div>
               hello
               <button >color</button>
          </div>
          </>
     )
}

export default Rani;

