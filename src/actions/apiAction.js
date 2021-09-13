import apiService from '../services/apiService'
import ActionType from '../utils/actionType'

const list = (params, callback = () => { }) => dispatch => {
    apiService
        .list(params)
        .then(response => {
            if (response) {
                if(!params.isPagination){
                    dispatch({
                        type: ActionType.FETCH,
                        payload: response.data.data
                    })
                }else{
                    dispatch({
                        type: ActionType.PAGINATION,
                        payload: response.data.data
                    })
                }
                callback(response.data.data.results.length > 0)
            }
        })
        .catch(() => callback(false))
        .finally(() => { })
}

export default {
    list
}