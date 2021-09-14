import React from 'react';

export const SelectTagComponent = ({ label, name, value, onChange, options }: any) => {
    const optionsTag = options.map(({ label, value }: any, i: number) => (<React.Fragment key={i}>
            <option value={typeof(value) === typeof({}) ? JSON.stringify(value) : value}>{label}</option>
        </React.Fragment>)
    );
    return (
        <div className='input-item'>
            { label && <label htmlFor={name}>{label}</label> }
            <select className='select-tag' value={value} onChange={onChange}>
                {optionsTag}
            </select>
        </div>
    );
}