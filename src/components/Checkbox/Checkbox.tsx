import React from 'react';
import './Checkbox.scss';

interface CheckboxProps {
    value: string;
    checked: boolean;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
    value,
    checked,
    label,
    onChange
}) => {
    return (
        <div className="custom-checkbox">
            <input
                type="checkbox"
                id={`checkbox-${value}`}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={`checkbox-${value}`}>{label}</label>
        </div>
    );
};

export default Checkbox;
