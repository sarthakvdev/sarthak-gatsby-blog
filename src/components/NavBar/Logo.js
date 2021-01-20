import React from "react"
import cube from './assets/cube.svg'
import styled from 'styled-components'

const Img = styled.img`
    width: 32px;
    height: 32px;
    display: flex;
    margin: 13px 0;

    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        margin: 10px 0;
    }
`

const Logo = () => {
    return(
        <Img src={cube} alt='logo' />
    )
}

export default Logo;