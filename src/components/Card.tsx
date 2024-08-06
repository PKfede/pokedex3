import React, { useEffect, useState } from 'react'
import style from '../styles/card.module.css'
import { Pokemon, Types } from '../types/Pokemon'
import typeLibrary from '../assets/assetIndex'

interface CardProps {
    val: {
        name: string
        url: string
    }
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Card: React.FC<CardProps> = ({ val, setSearch }) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const getOne = async () => {
        const fetchData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${val.name}`
        );
        const data: Pokemon = await fetchData.json();

        setPokemon(data);
    };

    useEffect(() => {
        getOne();
    }, [val]);

    const onClick = () => {
        const poke = pokemon?.name
        if (poke)
            setSearch(poke)
    }

    return (
        <div className={style.card}>
            <div className={style.cardBackground}>
                <button onClick={onClick}>
                    <div className={style.cardData}>
                        <img src={pokemon?.sprites.front_default} alt="" />
                        <p > {val.name}</p>
                        <div className={style.typeLayout}>
                            {
                                pokemon?.types.map((val: Types) => {
                                    return (
                                        <img className={style.typeImg} src={typeLibrary[val.type.name as keyof typeof typeLibrary]} alt="" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </button>

            </div>



        </div>
    )
}

export default Card