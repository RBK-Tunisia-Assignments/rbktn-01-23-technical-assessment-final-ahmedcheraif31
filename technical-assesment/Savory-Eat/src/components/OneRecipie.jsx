import React from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = (props) => {
  return (
    props.e.map((e,i)=>

    <div>
      <div className="receipe-content-area">
        <div className="container">
          <div className="header">
            <img className="img" src={e.recepie_Image} alt="" />
         
          </div>
          <div className="text">
            <h1 className="food">Pizza</h1>
            <i > {e.Prep_Time}</i>
            <i > Serves: {e.Serves} </i>

            <p className="info">Cheesy pizza is a classic pizza topped with a generous amount of melted cheese. The cheese used can vary from mozzarella to cheddar, provolone, or any other type of cheese that melts well.</p>
          </div>
        </div>
      </div>
      
    </div>)
  );
};

export default Onerecepie;
