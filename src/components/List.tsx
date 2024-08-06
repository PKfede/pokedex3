import React from 'react';
import { PokemonList, PokemonResult } from '../types/Pokemon';
import Card from './Card';
import style from '../styles/list.module.css';
import Search from './Search';

interface ListProps {
    list: PokemonList;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const List: React.FC<ListProps> = ({ list, setSearch }) => {
    return (
        <>
            <div>
                <div className={style.listSearchLayout}>
                    <Search setSearch={setSearch} />
                </div>
                <div className={style.listLayout}>
                    {list.results.map((val: PokemonResult) => {
                        return (
                            <Card
                                key={val.url}
                                val={val}
                                setSearch={setSearch}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default List;
