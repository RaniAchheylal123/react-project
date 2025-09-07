import { useState } from "react";

function Contact(){

     const [contact, setContact] = useState([{name: "Rani", email: "rani@gmail.com", phone: "9452433452", password: "rani123@#"}]);

     const [formData, setFormData] =useState({name: "", email: "", phone: "", password: ""});

     function Contacts(e){
          setFormData({...formData, [e.target.name]: e.target.value});
     }

     function Contact(e){
          e.preventDefault();
          setContact([...contact, formData]);
          setFormData({name: "", email: "", phone: "", password: ""});
     }



     return(
          <>
          <div id="color">
          <h1>Contact page</h1>
          <div id="works">
               
          <div id="work">
               
               <form onSubmit={Contact}>
                    <label>Name : </label>
                    <input name="name" value={formData.name} onChange={Contacts} placeholder="Enter your name :"/><br></br>
                    
                    <label>Email : </label>
                    <input name="email" value={formData.email} onChange={Contacts} placeholder="Enter your Email : "/><br></br>

                    <label id="lab">Number : </label>
                    <input name="phone" value={formData.phone} onChange={Contacts} placeholder="Enter your Number : "/><br></br>

                    <label>Password : </label>
                    <input name="password" value={formData.password} onChange={Contacts} placeholder="Enter your password :"/><br></br>

                    <button type="submit">Submit</button>

               </form>
          </div>
          </div>
          </div>
          </>
     )
}

export default Contact; 