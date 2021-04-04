import React from "react"

interface Props {
 
    // onChangeForm возвращает функцию, которая принимает 
    showStats(id: number): string;
    _id: number,
    apiName: string,
};


const MiniBtn = ({ showStats, _id, apiName}: Props) => {
    return (
        <button type='button'
            className='btn btn-info miniBtn-text-color'
            onClick={() => showStats(_id)}>{apiName}
        </button>
    )
};

export default MiniBtn;