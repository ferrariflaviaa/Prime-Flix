//Base da URL: 
// https://api.themoviedb.org/3/

//URL da API:
// /movie/550?api_key=302f40e4989597a8086998d375a42d9d

import axios from "axios";

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api;