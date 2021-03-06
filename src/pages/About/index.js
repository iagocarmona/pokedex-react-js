import React, { useCallback, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api, { apidb } from '../../services/api'
import { Container, PokemonName, VectorStyled, VectorLink } from './styles'
import { useTheme } from 'styled-components'
import Loading from '../../components/Loading'
import PokemonAbout from '../../components/PokemonAbout'
import PokemonCardInfo from '../../components/PokemonCardInfo'

const About = () => {
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [pokemonDescription, setPokemonDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [pokemonWeakness, setPokemonWeakness] = useState()
  const { name } = useParams()
  const theme = useTheme()

  const handleGetPokemonStats = useCallback((name) => {
    try {
      setIsLoading(true)
      api.get(`/pokemon/${name.toLowerCase()}`).then((response) => {
        const result = response.data
        setPokemonInfo(result)
        handleGetPokemonWeakness(result?.types[0]?.type?.name)
        console.log(result)
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleGetPokemonDescription = useCallback((id) => {
    try {
      setIsLoading(true)
      apidb.get('/').then((response) => {
        const result = response.data
        if (id) {
          const pokemonSelected = result.find((pokemon) => pokemon.id === id)
          if (!pokemonSelected) {
            return setPokemonDescription(
              'Random text to fill a field with random words for a random pokemon. Such text was written and designed in a random way, its only objective is to fill in this missing information with random words until a good amount of random characters is obtained.'
            )
          }
          if (pokemonSelected?.description.trim() === '') {
            setPokemonDescription(
              'Random text to fill a field with random words for a random pokemon. Such text was written and designed in a random way, its only objective is to fill in this missing information with random words until a good amount of random characters is obtained.'
            )
          } else {
            setPokemonDescription(pokemonSelected?.description)
          }
        }
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleGetPokemonWeakness = useCallback((pokemon) => {
    try {
      setIsLoading(true)
      api.get(`type/${pokemon}`).then((response) => {
        const result = response.data
        setPokemonWeakness(result)
        console.log(result)
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const heightFormated = () => {
    if (pokemonInfo.height < 10) {
      return pokemonInfo.height * 10 + ' cm'
    } else {
      let height = pokemonInfo.height / 10
      return height + ' m'
    }
  }

  useEffect(() => {
    handleGetPokemonStats(name)
  }, [name, handleGetPokemonStats])

  useEffect(() => {
    handleGetPokemonDescription(pokemonInfo.id)
  }, [pokemonInfo, handleGetPokemonDescription])

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
          <PokemonAbout
            color={pokemonInfo?.types}
            code={`#${pokemonInfo?.id}`}
            name={name}
            badges={pokemonInfo?.types}
            image={
              pokemonInfo?.sprites?.other['official-artwork'].front_default
            }
          />
          <PokemonCardInfo
            color={
              theme.color.backgroundType[
                pokemonInfo?.types
                  ? `${pokemonInfo?.types[0]?.type?.name}`
                  : 'transparent'
              ]
            }
            description={pokemonDescription}
            species={pokemonInfo.species?.name}
            height={heightFormated()}
            weight={pokemonInfo.weight / 10 + ' kg'}
            weaknesses={pokemonWeakness?.damage_relations?.double_damage_from}
            catchRate="45"
            baseFriendship="70"
            growthRate="testando"
          />
        </Container>
      )}
    </>
  )
}

export default About
