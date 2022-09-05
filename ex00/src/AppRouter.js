import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage';
import Pokemons from './Pokemons';

const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Pokemons/>}/>
            <Route path='/:id' element={<PokemonPage/>}/>
        </Routes>
    )
}

export default AppRouter;
