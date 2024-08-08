import React, { useEffect, useState } from 'react';
import { PokemonList } from '../types/Pokemon';
import styles from '../styles/pagination.module.css';

interface PaginationProps {
    setOffset: React.Dispatch<React.SetStateAction<number>>;
    offset: number;
    count: number;
}

const Pagination: React.FC<PaginationProps> = ({
    setOffset,
    offset,
    count
}) => {
    const [page, setPage] = useState(1);
    const [pageInterval, setPageInterval] = useState<number[]>([]);

    const pages = count / 9;

    const handleNext = () => {
        setOffset(offset + 9);
        setPage(page + 1);
    };
    const handlePrev = () => {
        if (offset >= 9 && page > 1) {
            setOffset(offset - 9);
            setPage(page - 1);
        }
    };

    const handleNumberedButton = (val: number) => {
        setOffset((val - 1) * 9);

        setPage(val);
    };

    const getInterval = () => {
        const interval = [];

        const min = page - 2;
        const max = page + 2;

        if (min < 0) {
            for (let index = page; index <= page + 4; index++) {
                interval.push(index);
            }
            setPageInterval(interval);
        } else if (min > 0) {
            for (let index = min; index < page + 2; index++) {
                interval.push(index);
            }
            for (let index = max; index < page + 3; index++) {
                interval.push(index);
            }

            setPageInterval(interval);
        }
    };

    useEffect(() => {
        getInterval();
    }, [page]);

    console.log(page);

    return (
        <div>
            <button onClick={handlePrev}>Prev</button>
            {pageInterval &&
                pageInterval.map((val: number) => {
                    return (
                        <button
                            key={val}
                            className={
                                page === val ? styles.active : styles.inactive
                            }
                            value={val}
                            onClick={(e) =>
                                handleNumberedButton(
                                    Number(e.currentTarget.value)
                                )
                            }
                        >
                            {' '}
                            {val}
                        </button>
                    );
                })}
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Pagination;
