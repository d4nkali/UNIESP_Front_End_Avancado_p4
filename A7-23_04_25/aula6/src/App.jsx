import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {

    return (

        <> <BrowserRouter>

            <h1>Aula 6</h1>
            <hr />

            <h3>Exercício 1</h3>
            <Routes>

                <Route path='/' element={<h1>https://www.iesp.edu.br/institucional/a-faculdade</h1>} />
                <Route path='/lgpd' element={<h1>https://www.iesp.edu.br/institucional/dpo-lgpd</h1>} />
                <Route path='/noticias' element={<h1>https://www.iesp.edu.br/noticias</h1>} />

            </Routes>

            </BrowserRouter> </>

    );

};

export default App;