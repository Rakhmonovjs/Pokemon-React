import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonItem = ({ pokemon }) => {
    const [ pokemonData, setPokemonData ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

    const fetchPokemon = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonData(data);
    }

    useEffect(() => {
        fetchPokemon(pokemon.url.split("/")[6])
            .then(() => setLoading(false));

    }, []);

    if (loading) return;

    return (
    <div className="resultCard" onClick={() => navigate(`/${pokemonData.id}`)}>
        <div className="card">
            <div>
                <h1>{pokemonData.name}</h1>
                <img
                    width={200}
                    height={200}
                    alt={""}
                    src={pokemonData.sprites.other.dream_world.front_default}
                />

            </div>
        </div>
    </div>
    );
}

export default PokemonItem;
