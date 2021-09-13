import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button } from './styles'

const ButtonHeader = (props) => {
    const navigation = useNavigation()
    return (
        <Button
            activeOpacity={0.6}
            onPress={() => {
                navigation.navigate('Favorites')
            }}
        >{props.children}
        </Button>
    )
}

export default ButtonHeader