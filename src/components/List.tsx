import React from 'react';
import { PokemonList, PokemonResult } from '../types/Pokemon';
import Card from './Card';
import style from '../styles/list.module.css';
import Search from './Search';
import Pagination from './Pagination';

interface ListProps {
    list: PokemonList;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setOffset: React.Dispatch<React.SetStateAction<number>>;
    offset: number;
}

const List: React.FC<ListProps> = ({ list, setSearch, setOffset, offset }) => {
    const count = list.count;
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
                <Pagination
                    offset={offset}
                    setOffset={setOffset}
                    count={count}
                />
            </div>
        </>
    );
};

export default List;
