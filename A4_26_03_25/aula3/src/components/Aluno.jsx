import React from "react";

const Aluno = ({ nome, email, curso }) => {

    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
            <p>Curso: {curso}</p>
            <br />
        </div>
    );
};

export default Aluno;
