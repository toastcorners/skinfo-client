import React from 'react'
import finelines from '../../src/images/Fine Lines and Wrinkles.png'
import dry from '../../src/images/dry.png'
import lax from '../../src/images/lossoffirm.png'
import texture from '../../src/images/texture.png'
import darkspots from '../../src/images/darkspots (1).png'
import blemishes from '../../src/images/blemishes (1).png'
import antiaging from '../../src/images/antiaging.png'





const Filters = (props) => {
    return (
        <div className='filter-container'>
            <img onClick={props.filter} className='0' src={finelines} width='300' height='200' alt='fine lines and wrinkles'></img>
            <img onClick={props.filter} className='1' src={dry} width='300' height='200' alt='dry'></img>
            <img onClick={props.filter} className='2' src={lax} width='300' height='200' alt='loose skin'></img>
            <img onClick={props.filter} className='3' src={texture} width='300' height='200' alt='uneven skin'></img>
            <img onClick={props.filter} className='4' src={darkspots} width='300' height='200' alt='dark spots'></img>
            <img onClick={props.filter} className='5' src={blemishes} width='300' height='200' alt='blemishes'></img>
            <img onClick={props.filter} className='6' src={antiaging} width='300' height='200' alt='anti aging'></img>
        </div>
    )

}

export default Filters