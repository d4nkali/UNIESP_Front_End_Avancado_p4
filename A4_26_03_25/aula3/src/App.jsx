import React from "react";
import EstouConseguindoAprenderReact from "./components/EstouConseguindoAprenderReact";
import Aluno from "./components/Aluno";
import NovoAluno from "./components/NovoAluno";
import EstaComSono from "./components/EstaComSono";

const App = () => {

    const alunos = [

        {nome: "Danilo", email: "danilo@exemplo.com", curso: "Sistemas para Internet"},
        {nome: "Roberto", email: "roberto@exemplo.com", curso: "Ciências da Computação"},
        {nome: "Lucas", email: "lucas@exemplo.com", curso: "Sistemas da Informação"}

    ];

    const novoAlunos = [

        {nome: "João", email: "joao@exemplo.com", curso: "Sistemas para Internet", media: "9.5"},
        {nome: "Kevin", email: "kevin@exemplo.com", curso: "Sistemas da Informação", media: "6.0"},
        {nome: "Nicole", email: "nicole@exemplo.com", curso: "Veterinária", media: "8.0"}

    ];

    return (
        <>
            <h1>Aula 3</h1>
            <hr />

            <h1>Exercício 1</h1>
            <EstouConseguindoAprenderReact estouConseguindo={true} />

            <br />
            <hr />
            <br />

            <h1>Exercício 2</h1>
            <EstaComSono comSono={false} />

            <br />
            <hr />
            <br />

            <h1>Exercício 3</h1>
            {alunos.map((aluno) => (
                <Aluno nome={aluno.nome} email={aluno.curso} curso={aluno.curso}/>
            ))}

            <br />
            <hr />
            <br />

            <h1>Exercício 4</h1>
            {novoAlunos.map((novoAlunos) => (
                <NovoAluno  nome={novoAlunos.nome} email={novoAlunos.email} curso={novoAlunos.curso} media={novoAlunos.media} />
            ))}

        </>
    );
};

export default App;
