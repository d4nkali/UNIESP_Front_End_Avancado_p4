import React, { useEffect, useState } from "react";

const url = "http://localhost:3000/alunos";

const ListarAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            setAlunos(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h3>Lista dos Alunos</h3>
            <table border="1" cellPadding="10" cellSpacing="0">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Matricula</th>
                    </tr>
                </thead>

                <tbody>
                    {alunos.map((alunos) => (

                        <tr key={alunos.id}>

                            <td>{alunos.id}</td>
                            <td>{alunos.nome}</td>
                            <td>{alunos.matricula}</td>

                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListarAlunos;
