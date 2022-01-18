import React from 'react'
import {
  Container,
  CardContainer,
  BadgesContainer,
  CardInfo,
  Code,
  Name,
  CardImage,
  Photo,
} from './styles.js'
import { useTheme } from 'styled-components'

import Badges from '../Badge/index.js'

const PokemonAbout = ({ code, name, badges, image, color }) => {
  const theme = useTheme()

  return (
    <Container
      color={
        theme.color.backgroundType[color ? color[0].type.name : 'transparent']
      }
    >
      <CardImage to={`pokemon/${name}`}>
        <Photo src={image} />
      </CardImage>
      <CardContainer>
        <CardInfo>
          <Code>{code}</Code>
          <Name>{name}</Name>
          <BadgesContainer>
            <Badges badgesList={badges} />
          </BadgesContainer>
        </CardInfo>
      </CardContainer>
    </Container>
  )
}

export default PokemonAbout
