import React from "react";

const Aluno = ({ nome, email, curso }) => {

    return (
        <div>
            <p>{nome}</p>
            <p>{email}</p>
            <p>{curso}</p>
            <br />
        </div>
    );
};

export default Aluno;
