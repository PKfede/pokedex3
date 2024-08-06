import { useState } from 'react';
import style from '../styles/search.module.css';

const Search: React.FC<{
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setSearch }) => {
    const [data, setData] = useState('');
    const searchData = () => {
        if (!data) {
            setSearch('mew');
        } else setSearch(data);
    };
    return (
        <div className={style.searchLayout}>
            <input type="text" onChange={(e) => setData(e.target.value)} />{' '}
            <button onClick={searchData}>Search</button>
        </div>
    );
};

export default Search;
