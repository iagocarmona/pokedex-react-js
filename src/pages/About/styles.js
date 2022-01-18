import styled from 'styled-components'
import { ReactComponent as Vector } from '../../assets/icons/vector.svg'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ color }) => color};
`
export const PokemonName = styled.h1`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1400%;
  background: -webkit-linear-gradient(
    white,
    transparent,
    ${({ color }) => color}
  );
  background-size: 100% 140%;
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  -webkit-background-clip: text;
  -webkit-text-stroke: 10px transparent;
  color: ${({ color }) => color};
`

export const VectorStyled = styled(Vector)`
  position: fixed;
  left: 1%;
  top: 10%;
  width: 4rem;
  height: 3rem;
  fill: #fff;
`

export const VectorLink = styled(Link)``

export const PokemonContainer = styled.div`
  /* background-color: red; */
  z-index: 0;
`
