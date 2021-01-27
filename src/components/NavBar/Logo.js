import React from "react"
import cube from './assets/cube.svg'
import styled from 'styled-components'

const Img = styled.img`
    display: flex;
    margin: 13px 0;
    
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        margin: 1px 0;
    }
`

const Logo = () => {
    return(
        <Img src={cube} alt='logo' style={{
            height: '30px',
            width: '30px'
        }} />
    )
}

export default Logo;