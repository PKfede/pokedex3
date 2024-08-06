import React from 'react'
import { PokemonList, PokemonResult } from '../types/Pokemon'
import Card from './Card'
import style from '../styles/list.module.css'

interface ListProps {
    list: PokemonList
    setSearch: React.Dispatch<React.SetStateAction<string>>
}


const List: React.FC<ListProps> = ({ list, setSearch }) => {

    return (
        <>
            <div className={style.listLayout}>
                {
                    list.results.map((val: PokemonResult) => {
                        return (
                            <Card key={val.url} val={val} setSearch={setSearch} />
                        )
                    })
                }
            </div>

        </>
    )
}

export default List