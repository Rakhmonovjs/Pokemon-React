import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Particle from "../components/Particle";
import axios from 'axios';

const PokemonPage = () => {
    const [ data, setData ] = useState();
    const [ loading, setLoading ] = useState(true);
    const { id } = useParams();

    const fetchPokemon = async (id) => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setData(data);
    }

    useEffect(() => {
        fetchPokemon(id)
            .then(() => setLoading(false));

    }, [id]);

    if(loading) return;

    console.log(data)

    return (
        <>
        <Particle/>
       <div className="page">
         <div className="resultCard">
            <div className="card">
                <div>
                    <h1>{data.name}</h1>
                    <img
                        width={150}
                        height={150}
                        alt={""}
                        src={data.sprites.other.dream_world.front_default}
                    />
                    <div className="soz">
                        <p>SPECIES <h3>{data?.stats[0].base_stat}</h3></p>
                        <h3>ATTACK: {data?.stats[1].base_stat}</h3>
                        <h4>DEFENSE: {data?.stats[2].base_stat}</h4>
                        <p>TYPE: {data?.stats[3].base_stat}</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="link">
                            <a class="qwasar" href="https://upskill.us.qwasar.io/users/rahmonov_a" >Qwasar</a>
                            <div ><a class="linkedln" href="https://www.linkedin.com/in/asadbek-rakhmonov-595b44202/" >Linkedln</a> </div>
                            <div ><a class="github" href="https://github.com/Rakhmonov-Asadbek" >Git hub</a> </div>
                        </div>
       </div>
       </>
    )
}

export default PokemonPage;
