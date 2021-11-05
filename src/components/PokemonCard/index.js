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

import Badges from '../Badge/index.js'

const PokemonCard = ({ code, name, badges, image }) => {
  return (
    <Container>
      <CardContainer>
        <CardInfo>
          <Code>{code}</Code>
          <Name>{name}</Name>
          <BadgesContainer>
            <Badges badgesList={badges} />
          </BadgesContainer>
        </CardInfo>
      </CardContainer>
      <CardImage>
        <Photo src={image} />
      </CardImage>
    </Container>
  )
}

export default PokemonCard
