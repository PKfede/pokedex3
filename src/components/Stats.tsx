import React from 'react';
import style from '../styles/info.module.css';
import { Pokemon, Stat } from '../types/Pokemon';

const Stats: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    const stats = ['HP', 'ATK', 'DEF', 'SP-A', 'SP-D', 'SPD'];
    return (
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
    );
};

export default Stats;
