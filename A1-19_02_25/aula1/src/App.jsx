import React from "react";
import Adicao from "./components/Adicao";
import Subtracao from "./components/Subitracao";

const App = () => {
    return (

    <div>

        <Adicao num1={4} num2={6} />
        <Subtracao num1={8} num2={2} />

    </div>)
};

export default App;
