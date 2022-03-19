import { NavLink } from "react-router-dom"
import styled from "styled-components"


const Error404 = () => {
  return (
    <Contenedor404>
        <h1>Error404</h1>
        <p>Página no encontrada</p>
        <NavLink to="/">👈 Ir a la página de Inicio</NavLink>        
    </Contenedor404>
  )
}

const Contenedor404 = styled.div`
    p{
        margin-bottom: 20px;
    }
    a{
        text-transform: uppercase;
    }
`

export default Error404