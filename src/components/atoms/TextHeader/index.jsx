import React from 'react'

import { Text } from './styles'

const TextHeader = ({ value }) => {
    return (
        <Text
            style={{
                textShadowColor: 'rgba(0, 0, 0, 0.8)',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10
            }}
        >
            {value}
        </Text>
    )
}

export default TextHeader