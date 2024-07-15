import React from 'react';
import clsx from 'clsx';
import './DetailField.scss';

interface PropsType {
    description: string;
    info: string;
    className: string;
}

const DetailField: React.FC<PropsType> = ({ description, info, className }) => {
    const rootClassName = clsx('detail', className);

    return (
        <div className={rootClassName}>
            <div className="detail-description">{description}</div>
            <div className="detail-info">{info}</div>
        </div>
    );
};

export default DetailField;
