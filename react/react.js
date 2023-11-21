import React from "react";
import ReactDOM from "react-dom/client";
import './car.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h2>React Project - Components</h2>
    <ol>
      <li>Porsche</li>
      <li>Lada</li>
      <li>Mazda</li>
      <li>Aston Martin</li>
    </ol>

  <div className="car-info">
    <img src="https://masin.az/uploads/posts/2022-01/__1364151.jpg" 
    alt="Lada Priora-2023" width="100px"
    />
    <h5>Lada Priora</h5>
    <p>42.000$</p>


  </div>
    <p>Copyright &#169; {new Date().getFullYear()}</p>
  </div>
  
);
