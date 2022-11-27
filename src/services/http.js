import axios from "axios"

export const peticion = () => {
   return axios.get('https://sdrickandmortyapi.com/api/character/2')
}