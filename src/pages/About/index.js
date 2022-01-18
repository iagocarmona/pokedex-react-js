import React, { useCallback, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import {
  Container,
  PokemonName,
  VectorStyled,
  VectorLink,
  PokemonContainer,
} from './styles'
import { useTheme } from 'styled-components'
import Loading from '../../components/Loading'
import PokemonAbout from '../../components/PokemonAbout'

const About = () => {
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { name } = useParams()
  const theme = useTheme()

  const handleGetPokemonStats = useCallback((name) => {
    try {
      setIsLoading(true)
      api.get(`/pokemon/${name.toLowerCase()}`).then((response) => {
        const result = response.data
        setPokemonInfo(result)
        console.log(result)
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    handleGetPokemonStats(name)
  }, [name, handleGetPokemonStats])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container
          color={
            theme.color.backgroundType[
              pokemonInfo.types
                ? `${pokemonInfo.types[0]?.type?.name}`
                : 'transparent'
            ]
          }
        >
          <PokemonName
            color={
              theme.color.backgroundType[
                pokemonInfo.types
                  ? `${pokemonInfo.types[0]?.type?.name}`
                  : 'transparent'
              ]
            }
          >
            <VectorLink to="/">
              <VectorStyled />
            </VectorLink>
            {name}
          </PokemonName>
          <PokemonContainer>
            <PokemonAbout
              color={pokemonInfo?.types}
              // key={index}
              code={`#${pokemonInfo?.id}`}
              name={name}
              badges={pokemonInfo?.types}
              image={
                pokemonInfo?.sprites?.other['official-artwork'].front_default
              }
            />
          </PokemonContainer>
        </Container>
      )}
    </>
  )
}

export default About
