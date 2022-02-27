import React, { memo } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from './Themes'


import LogoComponent from './subComponents/LogoComponent';
import SocialIcons from './subComponents/SocialIcons';
import PowerButton from './subComponents/PowerButton';
import ParticleComponent from './subComponents/ParticleComponent';

import astronaut from '../assets/Images/spaceman.png'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
overflow: hidden;
`
const float = keyframes`
0% {transform: translateY(-10)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10)}
`
const Spanceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}

`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
height: 60vh;
width: 50vw;
padding: 2rem;
z-index: 3;
line-height: 1.5;
display: flex;
align-items: center;
justify-content: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;
font-family: 'Ubuntu Mono', monospace;
font-style: italic;

`


const AboutPage = memo((props) => {
    return (
        <ThemeProvider theme={darkTheme}>

            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spanceman>

                    <img src={astronaut} alt="spaceman" />
                </Spanceman>

                <Main>
                    hhhhhhhhhhhfsdhfsdhfisadhfhasdfhsdaifhiasduhfljsdahflshdiufhsduifhsauidhfiuasdhfuisdahfuihasduifhasdifhasdiuhfiuasdhfasdh
                    <br /> <br />
                    hhhhhhhhhhhfsdhfsdhfisadhfhasdfhsdaifhiasduhfljsdahflshdiufhsduifhsauidhfiuasdhfuisdahfuihasduifhasdifhasdiuhfiuasdhfasdh.
                    <br /> <br />
                    hhhhhhhhhhhfsdhfsdhfisadhfhasdfhsdaifhiasduhfljsdahflshdiufhsduifhsauidhfiuasdhfuisdahfuihasduifhasdifhasdiuhfiuasdhfasdh.
                </Main>

            </Box >
        </ThemeProvider >
    )
})

export default AboutPage