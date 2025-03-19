import React from "react";
import HookContador from "./components/HookContador";
import HookMegaSena from "./components/HookMegaSena";

function App() {
    return (
        <div>
            <h1>Aula 2</h1>
            <hr />
            <br />

            <h2>Exemplo 1</h2>
            <hr />
            <HookContador />

            <br />
            <br />

            <h2>Exemplo 2</h2>
            <hr />
            <HookMegaSena />
        </div>
    );
}

export default App;
