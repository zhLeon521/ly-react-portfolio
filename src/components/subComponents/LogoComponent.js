import React, { memo } from 'react'
import styled from 'styled-components'
import { darkTheme } from '../Themes'

const Logo = styled.h1`
display: inline-block;
color:${props => props.color === "dark" ? darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

const LogoComponent = memo((props) => {
    return (
        <Logo color={props.theme}>
            LY
        </Logo>
    )
})

export default LogoComponent;   