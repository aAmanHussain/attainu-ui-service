import React from 'react';

export const InputComponent = ({ label, type, name, placeholder, value, onChange, onClick }: any) => {
    return (
        <div className='input-item'>
            { label && <label htmlFor={name}>{label}</label> }
            <input autoComplete='false' type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} onClick={onClick} />
        </div>
    );
}