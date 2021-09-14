import React from 'react';

import { InputComponent } from '../input/input.component';

export const AuthFormComponent = ({ formItems, handleSubmit, handleChange }: any) => {
    const formBody = formItems.map((inputItem: any, i: number) => {
        return (
            <React.Fragment key={i}>
                <InputComponent 
                    label={inputItem.label}
                    type={inputItem.type}
                    name={inputItem.name}
                    placeholder={inputItem.placeholder}
                    required={inputItem.required}
                    onChange={(event: Event) => inputItem?.name && handleChange(event, inputItem.name)}
                />            
            </React.Fragment>
        );
    });
    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            {formBody}
        </form>
    );
}