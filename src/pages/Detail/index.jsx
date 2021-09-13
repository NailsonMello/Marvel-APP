import React from 'react'
import { useSelector } from "react-redux"
import { useRoute } from '@react-navigation/native'

import DetailHero from '../../components/templates/Detail'
import HeaderDetails from '../../components/molecules/HeaderDetails'

import { Container } from './styles'


const Detail = () => {
    const route = useRoute()
    const { hero } = route.params
    const { listStorage } = useSelector(state => state.marvelReducer)

    return (
        <Container
            imageStyle={{ opacity: 0.8 }}
            resizeMode='cover'
            source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
        >
            <HeaderDetails hero={hero} listStorage={listStorage} />
            <DetailHero hero={hero} />
        </Container>
    )
}

export default Detail
