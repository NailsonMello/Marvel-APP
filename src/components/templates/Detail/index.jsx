import React from 'react'
import HeroData from '../../organisms/HeroData'

import { Container } from './styles'

const Detail = ({ hero }) => {
    return (
        <Container
            imageStyle={{ opacity: 0.8 }}
            resizeMode='cover'
            source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
        >
            <HeroData hero={hero} />
        </Container>
    )
}

export default Detail