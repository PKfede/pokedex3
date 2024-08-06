import React from 'react';
import style from '../styles/info.module.css';
import { Ability, Pokemon, Stat } from '../types/Pokemon';
import Abilities from './Abilities';

const Info: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    const stats = ['HP', 'ATK', 'DEF', 'SP-A', 'SP-D', 'SPD'];
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

                <div className={style.infoStats}>
                    {pokemon.stats.map((val: Stat, index: number) => {
                        return (
                            <div key={index}>
                                <p>{stats[index]}</p>
                                <p>{val.base_stat}</p>
                            </div>
                        );
                    })}
                </div>

                <h1>EVOLUTION</h1>
            </div>
        </>
    );
};

export default Info;
