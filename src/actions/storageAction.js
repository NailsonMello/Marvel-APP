import storageService from '../services/storageService'
import ActionType from '../utils/actionType'

const getFavorites = (callback = () => { }) => dispatch => {
    storageService
        .getFavorites()
        .then((response) => {
            if (response) {
                dispatch({
                    type: ActionType.FETCH_STORAGE,
                    payload: JSON.parse(response)
                })
                callback(true)
            }
        })
        .catch(() => callback(false))
        .finally(() => { })

}

const saveHero = (hero, callback = () => { }) => dispatch => {
    storageService
        .saveHero(hero)
        .then((response) => {
            if (response) {
                callback(response)
            }
        })
        .catch(() => callback(false))
        .finally(() => { })
}

export default {
    saveHero,
    getFavorites
}