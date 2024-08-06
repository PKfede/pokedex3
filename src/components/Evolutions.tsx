import React, { useEffect, useLayoutEffect, useState } from 'react';
import { EvolutionChain, EvolvesTo, Pokemon, Species } from '../types/Pokemon';

const Evolutions: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    const [arrEvo, setArrEvo] = useState<string[]>([]);
    const [arrImg, setArrImg] = useState<Pokemon[]>([]);

    const getOne = async (name: string) => {
        const fetchData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data: Pokemon = await fetchData.json();

        return data;
    };

    const getSpecies = async () => {
        const fetchData = await fetch(pokemon.species.url);
        const data: Species = await fetchData.json();

        getEvo(data);
    };

    const getEvo = async (species: Species) => {
        const dataEvo: string[] = [];
        const fetchData = await fetch(species.evolution_chain.url);
        const data: EvolutionChain = await fetchData.json();

        dataEvo.push(data.chain.species.name);

        if (data.chain.evolves_to.length > 0) {
            dataEvo.push(data.chain.evolves_to[0].species.name);
            if (data.chain.evolves_to[0].evolves_to.length > 0) {
                dataEvo.push(
                    data.chain.evolves_to[0].evolves_to[0].species.name
                );
            }
        }

        setArrEvo(dataEvo);
    };

    const getImages = async () => {
        const images = await Promise.all(
            arrEvo.map(async (val: string) => {
                return await getOne(val);
            })
        );

        setArrImg(images);
    };

    useEffect(() => {
        getSpecies();
    }, [pokemon]);

    useEffect(() => {
        if (arrEvo.length > 0) getImages();
    }, [arrEvo]);

    return (
        <div>
            <div>
                {arrImg.map((val: Pokemon, index: number) => {
                    return (
                        <img
                            key={index}
                            src={val.sprites.front_default}
                            alt=""
                        />
                    );
                })}
            </div>
            <div>
                {arrImg.map((val: Pokemon, index: number) => {
                    return (
                        <img key={index} src={val.sprites.front_shiny} alt="" />
                    );
                })}
            </div>
        </div>
    );
};

export default Evolutions;
