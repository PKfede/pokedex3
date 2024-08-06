import React from 'react';
import style from '../styles/info.module.css';
import { Pokemon, Stat } from '../types/Pokemon';
import Abilities from './Abilities';
import Stats from './Stats';

const Info: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    return (
        <>
            <div className={style.infoLayout}>
                <img
                    className={style.infoImg}
                    src={
                        pokemon.sprites.other['official-artwork'].front_default
                    }
                    alt=""
                />
                <h1>{pokemon.name}</h1>
                <p># {pokemon.id}</p>

                <h1>ABILITIES</h1>

                <Abilities pokemon={pokemon} />

                <h1>STATS</h1>
                <Stats pokemon={pokemon} />

                <h1>EVOLUTION</h1>
            </div>
        </>
    );
};

export default Info;
