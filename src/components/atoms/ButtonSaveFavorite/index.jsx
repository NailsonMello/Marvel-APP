import React from 'react'
import { useDispatch } from 'react-redux'

import storageAction from '../../../actions/storageAction'
import utils from '../../../utils'

import { Button } from './styles'

const ButtonSaveFavorite = ({ children, hero, listStorage, ...rest }) => {
    const dispatch = useDispatch()

    const reloadList = (res) => {
        if (res) dispatch(storageAction.getFavorites())
    }

    const saveFavorite = hero => {
        const parseHero = utils.parseHero(hero)
        const listHero = listStorage.filter(x => x.id === hero.id)
        if (listHero.length) {
            dispatch(storageAction.saveHero(listStorage.filter(x => x.id !== hero.id), reloadList))
        } else {
            const join = listStorage.concat(parseHero)
            dispatch(storageAction.saveHero(join, reloadList))
        }
    }


    return (
        <Button
            {...rest}
            activeOpacity={0.6}
            onPress={() => saveFavorite(hero)}
        >
            {children}
        </Button>
    )
}

export default ButtonSaveFavorite