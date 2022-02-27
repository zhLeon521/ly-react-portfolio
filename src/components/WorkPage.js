import React, { memo } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'


import LogoComponent from './subComponents/LogoComponent';
import SocialIcons from './subComponents/SocialIcons';
import PowerButton from './subComponents/PowerButton';


import { Work } from '../data/WorkData'
import Card from './subComponents/Card';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
overflow: hidden;
`
const Main = styled.ul`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: ${props => props.theme.text};


`


const WorkPage = memo((props) => {
    return (
        <ThemeProvider theme={darkTheme}>

            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />

                <Main>
                    {
                        Work.map(d => <Card key={d} data={d} ></Card>)
                    }
                </Main>

            </Box >
        </ThemeProvider >
    )
})

export default WorkPage