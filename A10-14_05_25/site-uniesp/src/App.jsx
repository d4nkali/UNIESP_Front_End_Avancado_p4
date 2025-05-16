import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Inicial from "./pages/Inicial";
import Navbar from "./components/CustomNavbar";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Container className="my-4">
                    <Routes>
                        <Route path="/" element={<Inicial />}></Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
};

export default App;
