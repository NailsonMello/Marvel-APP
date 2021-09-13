import React from 'react'
import ImageGradient from '../../atoms/ImageGradient'
import ScrollViewData from '../../molecules/ScrollViewData'

import { Container } from './styles'

const HeroData = ({ hero }) => {
    return (
        <Container>
            <ImageGradient />
            <ScrollViewData hero={hero} />
        </Container>
    )
}

export default HeroData