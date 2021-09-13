import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import Favorites from '../../components/templates/Favorites'
import HeaderFavorites from '../../components/molecules/HeaderFavorites'

import storageAction from '../../actions/storageAction'

import { Container } from './styles'

const HeroesFavorites = () => {
    const dispatch = useDispatch()

    const { listStorage } = useSelector(state => state.marvelReducer)

    const getStorage = () => {
        dispatch(storageAction.getFavorites())
    }

    useEffect(() => {
        getStorage()
    }, [])

    return (
        <Container>
            <HeaderFavorites listStorage={listStorage} />
            <Favorites data={listStorage} />
        </Container>
    )
}

export default HeroesFavorites
