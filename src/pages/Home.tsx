import React from 'react'
import styled from 'styled-components'
import { bgColor } from '../Theme/colors'
import { Heading1 } from '../Theme/typography'
import { useMode } from '../store/mode/hooks'

const MainDiv = styled.div`
  height: 100vh;
  width: 100vw;
    background-color: ${bgColor.primary};
  padding: 25px;
`
const Home = () => {
  const mode = useMode()
  return (
    <MainDiv>
        <Heading1 mode={mode}>APP</Heading1>
    </MainDiv>
  )
}

export default Home