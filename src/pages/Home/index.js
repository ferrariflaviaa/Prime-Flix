// /movie/550?api_key=302f40e4989597a8086998d375a42d9d

import { useEffect, useState } from 'react';
import api from '../../services/api';

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "302f40e4989597a8086998d375a42d9d",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results);
        }

        loadFilmes();

    }, []);

    return (
        <div>
            <h1>Bem Vindo a Home</h1>
        </div>
    )
}
export default Home;

