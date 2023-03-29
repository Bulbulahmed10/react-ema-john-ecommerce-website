import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import "./index.css";

const App = () => {
  const [cartLength, setCartLength] = useState(0);
  return (
    <div>
      <Header totalCart={cartLength} />
      <Products setCartLength={setCartLength} />
    </div>
  );
};

export default App;
