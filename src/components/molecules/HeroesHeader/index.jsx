import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto'

import TextHeader from '../../atoms/TextHeader'
import ButtonHeader from '../../atoms/ButtonHeader'

import { Container } from './styles'

const HeroesHeader = () => {
    return (
        <Container>
            <ButtonHeader >
                <Icon
                    name="favorite"
                    color="#FFFFFF"
                    size={30}
                />
            </ButtonHeader>
            <TextHeader value={'Marvel App'} />
        </Container>
    )
}

export default HeroesHeader