import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from './components/Header';

import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import AcercaDe from "./pages/AcercaDe";
import Error404 from "./pages/Error404";

import useTema from "./hooks/useTema";


function App() {

    const { tema } = useTema();


    return (
        <ContenedorPrincipal>
            <Header />
            <Main tema={ tema } >
                <Routes>
                    <Route path="*" element ={ <Error404 /> } />
                    <Route path="/" element ={ <Inicio /> } />
                    <Route path="/blog" element ={ <Blog /> } />
                    <Route path="/post/:id" element ={ <Post /> } />
                    <Route path="/acerca-de" element ={ <AcercaDe /> } />
                </Routes>
            </Main>
        </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
`
const Main = styled.main`
    font-size: ${ ( props )=> props.tema ? props.tema.fontSize+'px': '16px' };
    text-align: ${ ( props )=> props.tema ? props.tema.align : 'left' };
    background-color: #FFF;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(129, 129, 129, 0.1);
`

export default App;
