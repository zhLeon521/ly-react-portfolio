import React, { memo } from 'react'
import styled from 'styled-components';

import { Work } from '../../data/WorkData'
const Box = styled.li`
width: 16rem;
height: 40vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border: 0 50px 0 50px;

display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}

`

const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;

`

const Card = memo((props) => {
    const { id, name, description, tags, demo, github } = props.data;

    return (
        <Box>
            <Title key={id}>
                {name}
            </Title>

            <Description>
                {description}
            </Description>
        </Box>
    )
})

export default Card