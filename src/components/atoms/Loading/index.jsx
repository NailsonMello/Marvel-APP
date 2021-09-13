import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Container } from './styles'

const Loading = ({ load }) => {
    if (!load) return null
    return (
        <Container>
            <ActivityIndicator size={30} color="#e40505" />
        </Container>
    )
}

export default Loading