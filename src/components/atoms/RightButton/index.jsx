import React from 'react'
import { Alert, Share } from 'react-native'
import { Button } from './styles'

const RightButton = ({ children, listStorage }) => {

    const onShare = async () => {
        const listFavorites = `Minha Lista de heróis favoritos: \n ${listStorage.map(e => `${e.name}`).toString()}`
        try {
            const result = await Share.share({
                message: listFavorites.split(",").join("\n")
            })
        } catch (error) {
            Alert.alert(error.message);
        }
    }

    return (
        <Button
            opacity={0.6}
            onPress={onShare}
        >
            {children}
        </Button>
    )
}

export default RightButton