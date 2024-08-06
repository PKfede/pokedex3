import React from 'react';
import { Ability, Pokemon } from '../types/Pokemon';
import style from '../styles/info.module.css';

const Abilities: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    return (
        <div className={style.infoAbilities}>
            {pokemon.abilities.map((val: Ability, index: number) => {
                return <p key={index}>{val.ability.name}</p>;
            })}
        </div>
    );
};

export default Abilities;
