import React from 'react'

import utils from '../../../utils'

import { Text } from './styles'

const BiographyText = ({ value }) => {
    return <Text>{utils.isEmpty(value) ? 'Sem descrição' : value}</Text>
}

export default BiographyText