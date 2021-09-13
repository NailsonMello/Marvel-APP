import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import TextEmpty from '../../atoms/TextEmpty'

import { Container } from './styles'

const EmptyData = () => {
    return (
        <Container>
            <Icon
                name="sad-tear"
                size={100}
                color="#e40505" />
            <TextEmpty value="Nenhum herói encontrado." />
        </Container>
    )
}

export default EmptyData