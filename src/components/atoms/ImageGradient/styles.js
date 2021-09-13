import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Image = styled(LinearGradient).attrs({
    colors: ['transparent', '#000'],
})`
    flex: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 150%;
`