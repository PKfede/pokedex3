
interface PokemonList {
    count: number
    next?: string
    previous?: string
    results: PokemonResult[]
}

interface PokemonResult {
    name: string
    url: string

}

interface Pokemon {
    abilities: Ability[]
    base_experience: string
    height: number
    id: number
    name: string
    species: {
        name: string
        url: string
    }
    sprites: {
        front_default: string
        front_shiny: string
        other: {
            'official-artwork': {
                front_default: string
                front_shiny
            }
        }
    }
    stats: Stat[]
    types: Types[]
    weight: number
}

interface Ability {
    ability: {
        name: string
        url: string
    }
}

interface Stat {
    base_stat: number
    stat: {
        name: string
    }
}

interface Types {
    slot: number
    type: {
        name: string
    }
}

export { PokemonList, PokemonResult, Pokemon, Types, Ability, Stat }