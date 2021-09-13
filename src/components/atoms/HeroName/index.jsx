import React from 'react'
import { Text } from './styles'

const HeroName = ({ value }) => {
    return <Text numberOfLines={2}>{value}</Text>
}

export default HeroName