import React from 'react';

const SortButtons = ({ onSort }) => {
    return (
        <div>
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Sort</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
            <li><button onClick={()=>onSort('ascending')}><a>Ascending</a></button></li>
            <li><button onClick={()=>onSort('descending')}><a>Descending</a></button></li>
            </ul>
            </div>
        </div>
    );
};

export default SortButtons;