import React from 'react'
import { useNavigation } from '@react-navigation/core'
import Icon from 'react-native-vector-icons/AntDesign'

import HeroImage from '../../atoms/HeroImage'
import HeroName from '../../atoms/HeroName'
import ButtonSaveFavorite from '../../atoms/ButtonSaveFavorite'

import { Card } from './styles'
import utils from '../../../utils'

const Hero = ({ hero, listStorage }) => {
    const navigation = useNavigation()
    return (
        <Card
            activeOpacity={0.6}
            onPress={() => {
                navigation.navigate('Detail', {
                    hero
                })
            }}
        >
            <HeroImage
                source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
            />
            <HeroName value={hero.name} />
            <ButtonSaveFavorite hero={hero} listStorage={listStorage}>
                <Icon
                    name={utils.heroIsFavorite(hero, listStorage) ? "heart" : "hearto"}
                    color="#e40505"
                    size={25}
                />
            </ButtonSaveFavorite>
        </Card>
    )
}

export default Hero