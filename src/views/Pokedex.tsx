import React, { useEffect, useState } from 'react';
import List from '../components/List';
import { Pokemon, PokemonList } from '../types/Pokemon';
import styles from '../styles/pokedex.module.css';
import Info from '../components/Info';

const Pokedex = () => {
    const [list, setList] = useState<PokemonList | null>(null);
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const getList = async () => {
        const fetchData = await fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`
        );
        const data: PokemonList = await fetchData.json();
        setSearch(data?.results[0].name);
        setList(data);
    };

    const getOne = async () => {
        const fetchData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${search}`
        );
        const data: Pokemon = await fetchData.json();

        setPokemon(data);
    };

    useEffect(() => {
        getList();
    }, []);

    useEffect(() => {
        if (list) {
            getOne();
        }
    }, [search]);

    return (
        <>
            <div className={styles.pokedexLayout}>
                {list && <List list={list} setSearch={setSearch} />}
                {pokemon && <Info pokemon={pokemon} />}
            </div>
        </>
    );
};

export default Pokedex;
