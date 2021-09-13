import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import BackToHome from '../../atoms/BackToHome'
import ButtonSaveFavorite from '../../atoms/ButtonSaveFavorite'

import { Container } from './styles'
import utils from '../../../utils'
import { style } from '../../../utils/constants'

const HeaderDetails = ({ hero, listStorage }) => {
    return (
        <Container>
            <BackToHome>
                <Icon
                    name="back"
                    color="#e40505"
                    size={25}
                />
            </BackToHome>
            <ButtonSaveFavorite
                style={style}
                hero={hero}
                listStorage={listStorage}
            >
                <Icon
                    name={utils.heroIsFavorite(hero, listStorage) ? "heart" : "hearto"}
                    color="#e40505"
                    size={25}
                />
            </ButtonSaveFavorite>
        </Container>
    )
}

export default HeaderDetails