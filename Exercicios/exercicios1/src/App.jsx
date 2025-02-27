import React from "react";
import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";
import Multiplicacao from "./components/Multiplicacao";
import Divisao from "./components/Divisao";

function App() {

    return (

        <>

            <h1>Exercícios 1</h1>
            <hr />

            <Adicao num1={2} num2={3}></Adicao>
            <br />

            <Subtracao num1={32} num2={9}></Subtracao>
            <br />

            <Multiplicacao num1={5} num2={6}></Multiplicacao>
            <br />

            <Divisao num1={90} num2={3}></Divisao>
            <br />

        </>

    );
}

export default App;
