import { useNavigation } from '@react-navigation/core'
import React from 'react'

import { Button } from './styles'

const BackToHome = (props) => {
    const navigation = useNavigation()
    return (
        <Button
            opacity={0.6}
            onPress={() => navigation.goBack()}
        >{props.children}
        </Button>
    )
}

export default BackToHome