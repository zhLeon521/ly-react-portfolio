import React, { memo, useState, useEffect } from 'react'
import styled from 'styled-components'

import LogoComponent from './subComponents/LogoComponent'
import PowerButton from './subComponents/PowerButton'
import SocialIcons from './subComponents/SocialIcons'
import bgImg from "../assets/Images/bgImg.jpg"

import { Blogs } from '../data/BlogData'
import BlogComponents from './BlogComponents'
import AnchorComponent from './subComponents/AnchorComponent'



const MainContainer = styled.div`
background-image:url(${bgImg});
background-size:cover;
background-repeat:no-repeat;
background-attachment:fixed;
background-position:center;
width:100vw;

`

const Container = styled.div`
background-color:${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
width:100%;
height:auto;
position:relative;
padding-bottom:5rem;

`

const Center = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding-top:10rem ;
`


const Grid = styled.div`
display:grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const BlogPage = memo(() => {

  const [number, setNumber] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, [])
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={number} />


        <Center>
          <Grid>
            {
              Blogs.map(blog => {
                return <BlogComponents key={blog.id} blog={blog} />
              })
            }

          </Grid>
        </Center>


      </Container>
    </MainContainer>
  )
})

export default BlogPage