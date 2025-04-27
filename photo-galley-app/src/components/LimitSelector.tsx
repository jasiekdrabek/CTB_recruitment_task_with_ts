import React from 'react';
import { LimitSelectorProps } from '../interfaces/LimitSelectorProps';

const LimitSelector: React.FC<LimitSelectorProps> = ({ limit, setLimit }) => {
    return (
        <div className="limit-selector">
            <label htmlFor="limit-select">Photos per page:</label>
            <select
                id="limit-select"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    );
};

export default LimitSelector;
