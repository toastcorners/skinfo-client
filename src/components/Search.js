import React from 'react'

const Search = (props) => {
    console.log(props)
    return (
        
        <div className="search">
            <input
                type="text" value={props.search}
                placeholder={"Search for products"} 
                onChange={props.filter}
                />
            <button type='submit' onClick={props.filter} className='search-button'> search 
            </button>
        </div>
    )
}
export default Search