import React, { useCallback, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'

const About = () => {
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { name } = useParams()

  const handleGetPokemonStats = useCallback((name) => {
    try {
      setIsLoading(true)
      api.get(`/pokemon/${name}`).then((response) => {
        const result = response.data
        setPokemonInfo((prevState) =>
          [...prevState, result].sort((a, b) => {
            return a.id - b.id
          })
        )
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
      <h1>{name}</h1>
    </>
  )
}

export default About
