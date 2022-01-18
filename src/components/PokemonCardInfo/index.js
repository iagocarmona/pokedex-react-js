import React, { useEffect, useState } from 'react'
import { Container, Pokedex, ChangeCard } from './styles.js'
import Pokeball from '../../assets/patterns/pokeballAbout.svg'

const PokemonCardInfo = ({ color, description }) => {
  const [isAboutVisible, setIsAboutVisible] = useState(true)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [isEvolutionVisible, setIsEvolutionVisible] = useState(false)

  useEffect(() => {
    console.log(color)
  })

  const handleActiveAboutVisible = () => {
    setIsAboutVisible(true)
    setIsStatsVisible(false)
    setIsEvolutionVisible(false)
  }
  const handleActiveStatsVisible = () => {
    setIsAboutVisible(false)
    setIsStatsVisible(true)
    setIsEvolutionVisible(false)
  }
  const handleActiveEvolutionVisible = () => {
    setIsAboutVisible(false)
    setIsStatsVisible(false)
    setIsEvolutionVisible(true)
  }

  return (
    <>
      <ChangeCard>
        <button
          className={isAboutVisible ? 'active' : ''}
          onClick={() => handleActiveAboutVisible()}
        >
          About
          {isAboutVisible && <img src={Pokeball} alt="Pokeball"></img>}
        </button>

        <button
          className={isStatsVisible ? 'active' : ''}
          onClick={() => handleActiveStatsVisible()}
        >
          Stats
          {isStatsVisible && <img src={Pokeball} alt="Pokeball"></img>}
        </button>
        <button
          className={isEvolutionVisible ? 'active' : ''}
          onClick={() => handleActiveEvolutionVisible()}
        >
          Evolution
          {isEvolutionVisible && <img src={Pokeball} alt="Pokeball"></img>}
        </button>
      </ChangeCard>
      <Container>
        {isAboutVisible && (
          <>
            <p>{description}</p>
            <Pokedex color={color}>
              <div>
                <h3>Pokedex Data</h3>
              </div>
              <div>
                <h3>Training</h3>
              </div>
            </Pokedex>
          </>
        )}
      </Container>
    </>
  )
}

export default PokemonCardInfo
