import React, { useEffect, useState } from 'react'
import { Container, Icon, Name } from './styles'
import BadgeIcons from '../../assets/types'

const Badges = ({ badgesList }) => {
  const [badgesListFormated, setBadgesListFormated] = useState([])

  useEffect(() => {
    setBadgesListFormated(badgesList)
  }, [badgesList])

  return badgesListFormated.map((badge) => (
    <Container color={badge.color} key={badge.id}>
      <Icon icon={BadgeIcons[badge.name.toLowerCase()]} />
      <Name>{badge.name}</Name>
    </Container>
  ))
}

export default Badges
