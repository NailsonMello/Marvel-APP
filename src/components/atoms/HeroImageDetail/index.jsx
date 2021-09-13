import React from 'react'

import { Image } from './styles'

const HeroImageDetail = ({...rest}) => {
    return <Image resizeMode='cover' {...rest} />
}

export default HeroImageDetail