import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Particle from "./components/Particle";
import PokemonItem from "./components/PokemonItem";

const Pokemons = () => {
    const navigate = useNavigate();
    const [offset, setOffset] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [ input,setInput ] = useState("");
    const [ searchItem, setsearchItem ] = useState([]);

    const fetchPokemon = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
            .then((result) => {
                setPokemons(prev => [...prev, ...result.data.results])
            })
            .catch(() => {
                console.error("Error!");
            })
    }

    const searchItemFn = ( event ) => {
        setInput(event.target.value.trim());
        if (event.target.value) {
            const filteredArray = pokemons.filter(item =>
                item.name.toLowerCase().includes(input.toLowerCase())
            );

            const arrayUnique = [...new Map(filteredArray.map(item =>
                [item["url"], item])).values()];

            setsearchItem(() => arrayUnique)
        } else {
            setsearchItem([]);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, [offset]);

    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            setOffset(offset + 20);
        }
    };


    if(!pokemons) return;

    return (
        <>
            <Particle/>
            <div className="search-box">
                <div className="searchArea">
                    <input className="search" type="text" placeholder="Search" value={input} onChange={searchItemFn}/>
                    {searchItem.length > 0 && (
                    <div style={{backgroundColor: 'white', width: '100%'}}>
                        {searchItem.map((item) => (
                            <div key={item.url} onClick={() => navigate(`/${item.url.split('/')[6]}`)}>{item.name}</div>
                        ))}
                    </div>
                    )}

                </div>
            </div>
            <div className="pokemons">
                {
                    pokemons && pokemons.map(pokemon => (
                        <PokemonItem key={pokemon.name} pokemon={pokemon}/>
                    ))
                }
            </div>

            <div className="resultCard">
                    <div className="card">
                        <h1>{pokemons.name}</h1>
                    </div>
            </div>
        </>
    )
}

export default Pokemons;
