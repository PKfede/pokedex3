import React from "react";
import style from "../styles/info.module.css";
import { Ability, Pokemon, Stat } from "../types/Pokemon";

const Info: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    return (
        <>
            <div className={style.infoLayout}>
                <img
                    src={pokemon.sprites.other["official-artwork"].front_default}
                    alt=""
                />
                <h1>{pokemon.name}</h1>
                <p># {pokemon.id}</p>
                <h1>ABILITIES</h1>

                {pokemon.abilities.map((val: Ability) => {
                    return <p>{val.ability.name}</p>;
                })}

                <h1>STATS</h1>

                {pokemon.stats.map((val: Stat) => {
                    return (
                        <div>
                            <p>{val.stat.name}</p>
                            <p>{val.base_stat}</p>
                        </div>
                    );
                })}

                <h1>EVOLUTION</h1>
            </div>
        </>
    );
};

export default Info;
