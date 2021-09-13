import React from 'react'

import BiographyText from '../../atoms/BiographyText'

import { Container } from './styles'

const BiographyHero = ({ description }) => {
    return (
        <Container>
            <BiographyText value={description} />
        </Container>
    )
}

export default BiographyHero