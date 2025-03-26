import React from "react";
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";
import Aluno from "./components/Aluno";

const App = () => {

    const alunos = [

        {nome: "Danilo", email: "danilo@exemplo.com", curso: "Sistemas para Internet"},
        {nome: "Roberto", email: "roberto@exemplo.com", curso: "Ciências da Computação"},
        {nome: "Lucas", email: "lucas@exemplo.com", curso: "Sistemas da Informação"}

    ];

    return (
        <div>
            <h1>Aula 3</h1>
            <hr />

            <h1>Exercício 1</h1>
            <EstouConseguindoAprenderReact estouConseguindo={true} />

            <br />
            <hr />
            <br />

            <h1>Exercício 2</h1>
            {alunos.map((aluno, index) => (
                <Aluno key={index} {...aluno} />
            ))}

        </div>
    );
};

export default App;
