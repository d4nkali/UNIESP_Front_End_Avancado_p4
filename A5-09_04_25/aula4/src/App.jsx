import React from "react";
import EstiloGlobal from "./components/EstiloGlobal";
import EstiloInline from "./components/EstiloInline";
import Campanha from "./components/Campanha";

const App = () => {
    return (
        <>
            <h1>Aula 4</h1>
            <hr />

            <h1>Exercício 1</h1>
            <EstiloGlobal />

            <br />
            <hr />
            <br />

            <h1>Exercício 2</h1>
            <EstiloInline />

            <br />
            <hr />
            <br />

            <h1>Exercício 3</h1>
            <Campanha mes={"Setembro"} />

        </>
    );
};

export default App;
