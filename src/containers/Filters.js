import React from 'react'
import finelines from '../../src/images/flw.png'
import dry from '../../src/images/dry.png'
import lax from '../../src/images/lax.png'
import texture from '../../src/images/ut.png'
import darkspots from '../../src/images/spots.png'
import blemishes from '../../src/images/blem.png'
import antiaging from '../../src/images/aa.png'
import enlarged from '../../src/images/pores.png'
import view from '../../src/images/view.png'
import styled from 'styled-components'

const ViewBy = styled.div`
    display: flex;
    padding-top: 10px;
`
const Finelines = styled.div`
    display: flex;
    padding-top: 10px;
    
`


const Filters = (props) => {
    return (
        <div className='filter-container'>
            <ViewBy>
            <img className='view' src={view} width='250' height='100' alt='filter by concern'></img>
            </ViewBy>
            <Finelines>
            <img onClick={props.filter} className='0' src={finelines} width='250' height='100' alt='fine lines and wrinkles'></img>
            </Finelines>
            <img onClick={props.filter} className='1' src={dry} width='250' height='100' alt='dry'></img>
            <img onClick={props.filter} className='2' src={lax} width='250' height='100' alt='loose skin'></img>
            <img onClick={props.filter} className='3' src={texture} width='250' height='100' alt='uneven skin'></img>
            <img onClick={props.filter} className='4' src={darkspots} width='250' height='100' alt='dark spots'></img>
            <img onClick={props.filter} className='5' src={blemishes} width='250' height='100' alt='blemishes'></img>
            <img onClick={props.filter} className='6' src={antiaging} width='250' height='100' alt='anti aging'></img>
            <img onClick={props.filter} className='7' src={enlarged} width='250' height='100' alt='enlarged pores'></img>
        </div>
    )

}

export default Filters