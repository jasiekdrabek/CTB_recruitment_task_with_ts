import React from 'react';
import './LimitSelector.css'
import { LimitSelectorProps } from '../interfaces/LimitSelectorProps';

const LimitSelector: React.FC<LimitSelectorProps> = ({ limit, setLimit }) => {
    return (
        <div className="limit-selector">
            <label htmlFor="limit-select">Photos per page:</label>
            <select
                id="limit-select"
                defaultValue={10}
                onChange={(e) => setLimit(Number(e.target.value))}
            >
                <option value="5">5 photos</option>
                <option value="10">10 photos</option>
                <option value="20">20 photos</option>
                <option value="50">50 photos</option>
                <option value="2500">2500 photos</option>
                <option value="5000">5000 photos</option>
            </select>
        </div>
    );
};

export default LimitSelector;
