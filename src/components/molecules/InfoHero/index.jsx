import React from 'react'
import HeroImageDetail from '../../atoms/HeroImageDetail'
import HeroNameDetail from '../../atoms/HeroNameDetail'

import { Container } from './styles'

const InfoHero = ({ hero }) => {
    return (
        <Container>
            <HeroImageDetail source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} />
            <HeroNameDetail value={hero.name} />
        </Container>
    )
}

export default InfoHero