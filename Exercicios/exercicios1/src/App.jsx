import React from "react";
import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";

function App() {

    return (

        <>

            <h1>Exercícios 1</h1>
            <hr />

            <Adicao num1={2} num2={3}></Adicao>
            <br />

            <Subtracao num1={32} num2={9}></Subtracao>
            <br />

        </>

    );
}

export default App;
