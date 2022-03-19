import { useContext } from 'react'
import TemaContext from './../context/TemaProvider'

const useTema = () => {
  return useContext( TemaContext )
}

export default useTema;

