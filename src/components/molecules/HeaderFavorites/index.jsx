import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import TextHeader from '../../atoms/TextHeader'
import ShareButton from '../../atoms/RightButton'
import BackToHome from '../../atoms/BackToHome'

import { Container } from './styles'

const HeaderFavorites = ({ listStorage }) => {
    return (
        <Container>
            <BackToHome>
                <Icon
                    name="back"
                    color="#e40505"
                    size={25}
                />
            </BackToHome>
            <ShareButton listStorage={listStorage} >
                <Icon
                    name="sharealt"
                    color="#e40505"
                    size={25}
                />
            </ShareButton>
            <TextHeader value={'Favoritos'} />
        </Container>
    )
}

export default HeaderFavorites