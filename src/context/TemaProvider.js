import { createContext, useState } from "react"

const TemaContext = createContext();

const TemaProvider = ({ children }) => {

    const [ tema, setTema ] = useState({
        align: 'left',
        fontSize: 18
    });

    const cambiarFuente = ( fuente ) => {

        if( tema.fontSize <= 10 && fuente < 0 ){
            console.log('Hola');
            return;
        }
        if( tema.fontSize >= 42 && fuente > 0 ){
            console.log('Hola');
            return;
        }

        const nuevoSize = tema.fontSize + fuente;
        setTema({
            ...tema,
            fontSize: nuevoSize
        })
    }

    const cambiarAlinieacion = ( alineacion ) =>{
        setTema({
            ...tema,
            align: alineacion
        })
    }

    const resetTema = () => {
        setTema({
                align: 'left',
                fontSize: 18
            })
    }

  return (
    <TemaContext.Provider
    value={{
        tema,
        cambiarFuente,
        cambiarAlinieacion,
        resetTema
    }} >
        { children }
    </TemaContext.Provider>
  )
}

export{
    TemaProvider
}

export default TemaContext