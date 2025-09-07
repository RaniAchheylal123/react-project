import { NavLink } from "react-router-dom";

function Navbar() {
  function Dark() {
    let bton = document.getElementById("btn");

    if (bton.textContent === "Dark Moode") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      bton.textContent = "Light Moode";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      bton.textContent = "Dark Moode";
    }
  }

  return (
    <>
      <div id="links">
        <button id="btn" onClick={Dark} style={{margin: "0", display: "inline-block", }}>Dark Moode</button>
        <div id="link">
          <ol>
            <NavLink to="/">Home page</NavLink>
          </ol>
          <ol>
            <NavLink to="/about">About page</NavLink>
          </ol>
          <ol>
            <NavLink to="/contact">Contact page</NavLink>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Navbar;
