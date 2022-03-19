import styled from "styled-components"
import useTema from "../hooks/useTema";



const Controles = () => {

    const { cambiarFuente, cambiarAlinieacion, resetTema } = useTema();

    
    return (
        <ContenedorControles>
            <div>
                <Boton onClick={ ()=> cambiarFuente( + 2 ) }>Aumentar ➕</Boton>
                <Boton onClick={ ()=> cambiarFuente( - 2 ) }> ➖ Disminuir</Boton>
            </div>
            <div>
                <Boton onClick={ ()=> cambiarAlinieacion('left') }>Izquierda</Boton>
                <Boton onClick={ ()=> cambiarAlinieacion('center') }>Centro</Boton>
                <Boton onClick={ ()=> cambiarAlinieacion('right') }>Derecha</Boton>
            </div>
            <div>
                <Boton className="btn-reset" onClick={ resetTema }>Restablecer</Boton>
            </div>
        </ContenedorControles>
  )
}

const ContenedorControles = styled.div`
    margin-top: 32px;
`;
 
const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    transition: all 0.2s ease;
 
    &:hover {
        background: #191668;
    }

    &.btn-reset{
        width: 238px;
        background: none;
        font-weight: bold;
        color: #165168;
        border: 2px solid #165168;
        margin-top: 16px;
        &:hover {
            background: #165168;
            color: #fff;
        }
    }
`;


export default Controles