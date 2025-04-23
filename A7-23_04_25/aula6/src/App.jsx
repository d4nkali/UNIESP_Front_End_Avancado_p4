import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicial from './components/Inicial';
import Lgpd from './components/Lgpd';

const App = () => {

    return (

        <> <BrowserRouter>

            <h1>Aula 6</h1>
            <hr />

            <h3>Exercício 1 e 2</h3>
            <Navbar />
            <Routes>

                <Route path='/' element={<Inicial />} />
                <Route path='/lgpd' element={<Lgpd />} />
                <Route path='/noticias' element={<h1>Noticias</h1>} />

            </Routes>

            </BrowserRouter> </>

    );

};

export default App;