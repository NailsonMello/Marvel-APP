import React from 'react'

import { Image } from './styles'

const HeroImage = ({...rest}) => {
  return <Image resizeMode='cover' {...rest} />
}

export default HeroImage