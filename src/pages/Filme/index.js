import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from "../../services/api"
import "./styled.css";


function Filme() {
    const { id } = useParams();
    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "302f40e4989597a8086998d375a42d9d",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilmes(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("FILME NÃO ENCOTRANDO")
                })
        }
        loadFilme();

        return () => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [])

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando Detalhes...</h1>
            </div>
        )
    }
    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avalição: {filme.vote_average.toFixed(1)} / 10</strong>
            <div className='area-buttons '>
                <button>Salvar</button>
                <button>
                    <a href="#">
                        Treiler
                    </a>;
                </button>

            </div>

        </div>
    )
}
export default Filme;