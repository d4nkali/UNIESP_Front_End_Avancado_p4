import React from "react";
import HookContador from "./components/HookContador";
import HookMegaSena from "./components/HookMegaSena";
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";

function App() {
    return (
        <div>
            <h1>Aula 2</h1>
            <hr />

            <h2>Exemplo 1</h2>
            <HookContador />

            <hr />

            <h2>Exemplo 2</h2>
            <HookMegaSena />

            <hr />
            <h1>Aula 3</h1>

            <h2>Exemplo 1</h2>
            <EstouConseguindoAprenderReact estouConseguindo={true} />

        </div>
    );
}

export default App;
