import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Background from '../../components/Background'
import { HomeContainer } from './styles'
import { useTheme } from 'styled-components'
import PokemonCard from '../../components/PokemonCard'

const Home = () => {
  const theme = useTheme()
  const [badges] = useState([
    {
      id: 1,
      name: 'Grass',
      color: theme.color.type.grass,
    },
    {
      id: 2,
      name: 'Poison',
      color: theme.color.type.poison,
    },
  ])
  return (
    <>
      <Background />
      <HomeContainer>
        <Navbar />
        <PokemonCard code="#1" name="Bulbasaur" badges={badges} />
      </HomeContainer>
    </>
  )
}

export default Home
