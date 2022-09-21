import React from 'react';
import { useSelector } from 'react-redux';
import style from './Cell.module.css';

const Cell = ({elem}) => {
    const width = useSelector(state => state.width)
    const height = useSelector(state => state.height)
    
    return (
        <div style={{width: width, height: height, background: elem.color}}
        className={style.cell} />
    );
};

export default Cell;