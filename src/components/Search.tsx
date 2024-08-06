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

        setData('');
    };

    const handleSearch = (val: string) => {
        setData(val);
    };
    return (
        <div className={style.searchLayout}>
            <input
                type="text"
                placeholder="Search Pokemon"
                onChange={(e) => handleSearch(e.target.value)}
                value={data}
            />{' '}
            <button onClick={searchData}>Search</button>
        </div>
    );
};

export default Search;
