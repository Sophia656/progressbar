import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Statistics from '../statistics/Statistics';
import Cell from '../UI/Cell';
import style from './Bar.module.css';

const Bar = () => {
    const elems = useSelector(state => state.elems)
    const [data, setData] = useState([]) // state for elems (and their further changes)
    const [allElems, setAllElems] = useState([]) // state for all elems to be rendered
  
    const totalValue = elems.reduce((sum, item) => {
      return sum + item.value
    }, 0)
  
    useEffect(() => {
      setData(elems.map(elem => {
        elem.bar = ((elem.value * 100) / totalValue).toFixed(1)
        return elem
      }))
    }, [])

    useEffect(() => {
        let num;
        const arr = []
        data.forEach(item => {
            num = Math.floor(item.bar)
            if (num !== 0) {
                for (let i = num; i > 0; i--) {
                    arr.push(item)
                }
            }
        })
        setAllElems(arr)
    }, [data])

    return (
        <div className={style.wrapper}>
            <h1>PROGRESSBAR COMPONENT</h1>
            <div className={style.cellsWrapper}>
                {allElems.map((elem, index) =>
                    <Cell key={index} elem={elem} />
                )}
            </div>
            <Statistics data={data} />
        </div>
    );
};

export default Bar;