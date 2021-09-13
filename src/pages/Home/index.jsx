import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import HeroesHeader from '../../components/molecules/HeroesHeader'
import InputSearch from '../../components/atoms/InputSearch'
import Heroes from '../../components/templates/Heroes'

import apiAction from '../../actions/apiAction'
import storageAction from '../../actions/storageAction'

import { Container, MainContainer } from './styles'
import utils from '../../utils'
import EmptyData from '../../components/molecules/EmptyData'

const Home = () => {
    const dispatch = useDispatch()

    const { list, listStorage } = useSelector(state => state.marvelReducer)
    const [loading, setLoading] = useState(true)
    const [heroName, setHeroName] = useState('')
    const [offSet, setOffSet] = useState(0)

    const handlerCallback = success => {
        setLoading(false)
    }

    const loadHeroes = (offset, name = '', isPagination = false) => {
        setLoading(true)
        const params = {
            offset,
            name: name,
            isPagination
        }
        dispatch(apiAction.list(params, handlerCallback))
    }

    const pagination = () => {
        if (utils.isEmpty(heroName)) {
            loadHeroes(offSet + 20, heroName, true)
            setOffSet(offSet + 20)
        }
    }

    const getStorage = () => {
        dispatch(storageAction.getFavorites())
    }
    useEffect(() => {
        loadHeroes(0)
    }, [])

    useEffect(() => {
        getStorage()
    }, [])

    return (
        <Container>
            <HeroesHeader />
            <MainContainer>
                <InputSearch
                    placeholder='Pesquisar herói'
                    multiline={false}
                    onChangeText={(text) => setHeroName(text)}
                    keyboardAppearance={'light'}
                    value={heroName}
                    blurOnSubmit={true}
                    onSubmitEditing={() => {
                        loadHeroes(0, heroName)
                    }}
                />
                {
                    list.length > 0 ? (
                        <Heroes data={list} listStorage={listStorage} loading={loading} pagination={pagination} />
                    ) : (
                        <EmptyData />
                    )
                }

            </MainContainer>
        </Container>
    )
}

export default Home
