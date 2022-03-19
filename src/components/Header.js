import { NavLink } from "react-router-dom"
import styled from "styled-components"


const Header = () => {
    return (
        <ContenedorHeader>
            <Titulo>Blog dev</Titulo>
            <NavegacionPrincipal>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/acerca-de">Acerca de</NavLink>
            </NavegacionPrincipal>
        </ContenedorHeader>
    )
}


const ContenedorHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;

`

const Titulo = styled.h1`
  margin-bottom: 16px;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 800;
`

const NavegacionPrincipal = styled.nav`
  a{
    text-decoration: none;
    color: #165168;
    margin: 10px;
    font-weight: 600;
    opacity: 0.8;
    padding: 0 5px;
  }
  a:hover{
    opacity: 1;
  }
  a.active{
    opacity: 1;
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`


export default Header