import AsyncStorage from '@react-native-async-storage/async-storage'

const getFavorites = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage
            .getItem('favorites')
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}
const saveHero = hero => {
    return new Promise((resolve, reject) => {
        AsyncStorage
            .setItem('favorites', JSON.stringify(hero))
            .then(() => resolve(true))
            .catch(() => reject(false))
    })

}

export default {
    getFavorites,
    saveHero
}