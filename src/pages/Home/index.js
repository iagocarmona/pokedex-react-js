import React from 'react'
import Navbar from '../../components/Navbar'
import Background from '../../components/Background'
import { HomeContainer } from './styles'

const Home = () => {
  return (
    <>
      <Background />
      <HomeContainer>
        <Navbar />
        <div>Home</div>
      </HomeContainer>
    </>
  )
}

export default Home
