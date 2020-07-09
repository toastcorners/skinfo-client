import React from 'react'
import styled from 'styled-components'


const SearchBar = styled.input`
    width: 208px;
    height: 35px;
    padding: 0px 28px 0px 30px;
    transform: translateY(-0%);
    transform: translateX(-155%);
    color: #B78989;
    font-family: 'Raleway', sans-serif;
`

const SearchBarDiv = styled.div`
    width: 382px;
    height: 40px;
    
`
const SearchSubmit = styled.button`
    transform: translateY(0%);
    transform: translateX(-740%);
`


const Search = (props) => {
    return (
        <SearchBarDiv>
            <SearchBar onSubmit={props.filter}
                type="text" value={props.KeyWord}
                placeholder={"Search"} 
                onChange={props.searchProducts}
            />
             <SearchSubmit type='submit' onClick={props.filter} className='search-button'> search 
             </SearchSubmit> 
              
        </SearchBarDiv>
    )
}
export default Search