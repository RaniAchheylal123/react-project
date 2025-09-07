// function Names(){
//      return (
//           <>
//           <div style={{backgroundColor: "black",
//                padding: "150px"
//           }}>
//                <button onClick={dd}>click me</button>

// import { useState } from "react";

// import { useReducer } from "react";


//                <h1 style={{ color: "white"}}>Hello Rani!</h1>
//                <ol style={{
//                     listStylePosition: "inside"                   
//                }}>
//                     <li>mango</li>
//                     <li>Apple</li>
//                     <li>banana</li>
//                </ol>
//           </div>

//           </>
//      )
// }

// function App(prop){
//      return(
//           <h3>Hello my number is  {prop.number}</h3>
//      )
// }


// function Apps() {
//      return(
//           <>
//           <App number = "17"/>
//           <App number = "7"/>
//           <App number = "10"/>          
//           </>
//      )
// }

// function Button(props) {
//   return <button>{props.text}</button>;
// }

// function Apps() {
//   return (
//     <>
//       <Button text="Login" />
//       <Button text="Signup" />
//       <Button text="Logout" />
//     </>
//   );
// }
// import { useReducer } from "react";
// function Apps(){
//      let count = 0;

//      const [,forceSat] = useReducer(x => x +1, 0);

//      function int(){
//      count = count +1;
//      console.log(count);
//      forceSat()
     
//      }


//      return (
//           <div>
//                <h3>counte: {count}</h3>
//                <button onClick={int}>+</button>
//           </div>
//      );
// }


// function Apps(){
//      function name(){
//           alert("Hello Rani")
//           document.body.style.backgroundColor ="pink"
//      }

//      return(
//           <button onClick={name}>me</button>
//      )
// }


// import { useState } from "react";
// function Apps(){
//      const [text, setText] = useState("");

//      function names(e){
//           setText(e.target.value);
//      }

//      return (
//           <div>
//                <input type="text" onChange={names}></input>
//                <p>you typed: {text}</p>
//           </div>
//      )
// }

// function Apps(){
//      function work(){
//           document.body.style.backgroundColor ="pink";
//           document.getElementById("int").value = ""
//           }

//      return (
//           <>
//           <div>
//                <div>
//                <input type="text" id="ints" placeholder="enter your wok :" style={{padding: "10px", margin: "10px"}}></input>
//                </div>
//                {/* <button onChange={work}>click</button> */}
//                <p onChange={work}></p>

//           </div>
//           </>
//      )
// }

// function Apps(){
//      return(
//           <button onClick={() => alert("Hello Rani!")}>click me</button>
//      )
// }

// function Apps(e){
//      console.log(e);
//      // return(
         
//      //      // <button onClick={() => Workr("Hello")}>me</button>
//      // )
// }

// function Apps(){
//      const [name, setName] = useState("");

//      function App(e){
//           setName(e.target.value);
//      }

//      return (
//           <div>
//                <input type="text" onChange={App}/>
//                <p>You typed : {name}</p>
//           </div>
//      )
// }


// function Apps(){
//      const [email, setEmail] = useState("");

//      function App(e){
//           e.preventDefault();
//           alert("form is submite :  " + email)
//      }

//      return(
//           <form onSubmit={App}>
//                <div>
//                <input
//                style={{padding: "10px", margin: "10px"}}
//                type ="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//                </div>

//                <button type="submit">submit</button>

//           </form>
//      );
// }


// // import { useState } from "react";
//  function Apps(){
//      const [text, setText] = useState("");

//      function works(e){
//           setText(e.target.value);
//      }

//      return (
//           <>
//           <div>
//                <input type ="text" onChange={works}></input>
//                <p>You typed :  {text}</p>
//           </div>
//           </>
//      )
//  }


// function Apps(){
//      const [email, setEmail] = useState("");

//      function works(e){
//           e.preventDefault();
//           alert("Your email is submited : " + email)
//      }

//      return(
//      <>
//      <div>
//           <form onSubmit={works}>
//           <input
//            type="email" 
//            value={email} 
//            onChange={(e) => setEmail(e.target.value)} 
//            style={{padding: "10px"}}
//            />
//           <div>
//                <button type="submit">Submit</button>
//           </div>
//           </form>
//      </div>
//      </>
//      );
// }


// function Apps(){
//      function works(){
//           alert("Hello ")
//      }

//      return(
//           <>
//           <div>
//                <button onClick={() => works("Rani👋")}>Rani</button>
//                <button onClick={() => works("How's your day ")}>Explain</button>
//           </div>
//           </>
//      )
// }


// function Apps(){
//      const [userName, userEmail] = useState({userName: "", userEmail: ""});

//      function work(e){
//           userEmail(...userEmail, [e.target.name], e.target.value);
//      }

//      function works(e){
//           e.preventDefault();
//               alert(`Username: ${formData.username}, Email: ${formData.email}`);
         
//      }
// }



// function Apps(){
//      const [formData, setData]= useState({username: "", useremail: ""})

//      function work(e){
//           setData(...formData, [e.target.name], e.target.value);
//      }

//      function works(e){

//      }
// }





















// function Apps(){
//      const [formData, setData] = useState({name: "", email: ""})

//      function work(e){
//           setData(...formData, [e.target.name], e.target.value)
//      }

//      function works(e){
//           e.preventDefault();
//           alert(`username: ${formData.name}, Email: ${formData.email}`)
//      }

//      return(
//           <>
//           <div>
//                <form onSubmit={works}>
//                     <div>
//                          <input 
//                          type="text"
//                          name="name"
//                          placeholder="Enter your name : "
//                          value={formData.name}
//                          onChange={work}
//                          style={{padding: "10px", margin: "10px"}}

//                          />
//                     </div>

//                     <div>
//                          <input
//                          type="email"
//                          name="email"
//                          placeholder="Enter your email : "
//                          value={formData.useremail}
//                          onChange={work}
//                          style={{padding: "10px", margin: "10px"}}
//                          />
//                     </div>

//                     <button type="submit">submit</button>


//                </form>

//                {/* <p>you typed : {formData}</p> */}
//           </div>
//           </>
//      )
// }



// function Apps(){
//      return(
//           <>
//           <BrowserRouter>
//           <Router>
//                <Route path="/" element={<Home/>}/>
//                <Route path="/about" element={<About/>} />
//           </Router>
//           </BrowserRouter>
//           </>
//      )
// }


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";

// function Apps() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }





export default Apps;







