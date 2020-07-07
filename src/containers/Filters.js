import React from 'react'

const Filters = ({ label, isSelected, onSelectionChange }) => (
    <div className='filter-container'>
            <label>
            <input
                type="checkbox"
                name={label}
                checked={isSelected}
                onChange={onSelectionChange}
                className="skin-check-input"
            />
            {label}
            </label>
        {/* <div className="product-checkbox"> 
            <label>
            <input
                type="checkbox"
                name={label}
                checked={isSelected}
                onChange={onSelectionChange}
                className="product-check-input"
            />
            {label}
            </label>
        </div> */}
    </div>
)

export default Filters