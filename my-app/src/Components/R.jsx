// function Rani(){
//      function chacngeColor(){
//           // document.body.style.backgroundColor ="red";
//               const value = document.getElementById("int").value;
//               alert("You entered: " + value);

import { useState } from "react";

//               setTimeout(()=>{
//                document.getElementById("int").value = ""
//               }, 1000)
//      }



//      return (
//           <>
//           <div>
//                <p>Hello how are you</p>
//                <input type="text" id="int" placeholder="Enter your work :"></input>
//                <button onClick={chacngeColor}>click me</button>
//           </div>


//           </>
//      );
// }




















// function Ranis(props){
//      return(
//           <>
//           <p> {props.name}</p>
//           <p>{props.game}</p>
//           <p>{props.posistion}</p>
//           <p>{props.adidas}</p>
//           <p>{props.nike}</p>
//           <p>{props.puma}</p>
//           </>
//      )

// }

// function Rani(){
//      return(
//           <>
//           <div id="dive">
//                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNcwOKGZ1QQlX4SHhG1-byMRadsXHZL-GD-w&s"/>
//                <Ranis name = "Rishi"/>
//                <Ranis game = "Footballer"/>
//                <Ranis name = "Striker"/>
               
//           </div>
//           </>
//      )


// }

function Rani(){
     const [count, setCount]= useState(0);

     
     return(
          <>
          <div>
               <p>Count : {count}</p>
               <button onClick={()=>setCount(count + 1)}></button>
          </div>
          </>
     )
}

export default Rani;