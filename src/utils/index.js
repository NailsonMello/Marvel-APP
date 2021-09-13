import md5 from 'js-md5'
import { PRIVATE_KEY, PUBLIC_KEY } from './constants'

const timestamps = Number(new Date())

export const basePath = (timestamp) => {
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
    return `&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
}

export const timestamp = () => timestamps

export const hash = () => {
    const hash = md5.create()
    return hash.update(timestamps + PRIVATE_KEY + PUBLIC_KEY)
}

export const isEmpty = (string) => {
    if (string === undefined || string.trim() === '') return true
    else return false
}

export const parseHero = (hero) => {
    return [
        {
            id: hero.id,
            name: hero.name,
            description: hero.description,
            thumbnail: hero.thumbnail
        }
    ]
}

export const heroIsFavorite = (hero, listHeroes) => {
    return listHeroes.filter(x => x.id === hero.id).length > 0
}

export default {
    basePath,
    timestamp,
    hash,
    isEmpty,
    parseHero,
    heroIsFavorite
}