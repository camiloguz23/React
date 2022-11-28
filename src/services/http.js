import axios from "axios"

export const peticion = () => {
   return axios.get('https://rickandmortyapi.com/api/character/2')
}