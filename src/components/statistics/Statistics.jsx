import React from 'react';
import style from './Statistics.module.css';

const Statistics = ({data}) => {
    return (
        <div className={style.wrapper}>
            {data.map(elem =>
                <div className={style.elem} key={elem.name}>
                    <div style={{background: elem.color}} className={style.elem_curcle}></div>
                    <div>{elem.name}: {elem.value} ({elem.bar}%)</div>
                </div>
            )}
        </div>
    );
};

export default Statistics;