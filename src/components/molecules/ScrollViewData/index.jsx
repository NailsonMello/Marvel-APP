import React from 'react'
import BiographyHero from '../BiographyHero'

import InfoHero from '../InfoHero'
import { Container } from './styles'

const ScrollViewData = ({ hero }) => {
    return (
        <Container>
            <InfoHero hero={hero} />
            <BiographyHero description={hero.description} />
        </Container>
    )
}

export default ScrollViewData