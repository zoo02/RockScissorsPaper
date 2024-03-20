import React from 'react';

const Box = (props) => {
    let resultClass = '';
    if (props.result === 'WIN') {
        resultClass = 'win';
    } else if (props.result === 'LOSE') {
        resultClass = 'lose';
    } else if (props.result === 'DRAW') {
        resultClass = 'draw';
    }

    return (
        <div className='background'>
            <div className='box'>
                <h1>{props.title}</h1>
                <img className='item-img' src={props.item && props.item.img} />
                <h2 className={`propsResult ${resultClass}`}>{props.result}</h2>
            </div>
        </div>
    );
};

export default Box;
