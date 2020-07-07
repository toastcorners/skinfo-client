import React from 'react'

const Search = (props) => {
    return (
        <div className="search">
            <input
                type="text" value={props.search}
                placeholder={"Search for products"}
                onChange={props.search}
                />
            <button onClick={props.filter} className="search-button">browse</button>
        </div>
    )
}
export default Search