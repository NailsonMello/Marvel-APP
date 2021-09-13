import http from '../config/httpRequest/http'
import utils from '../utils'

const list = (params) => {
    let PARAMS  
    if (!utils.isEmpty(params.name)) {
        PARAMS = `name=${params.name}&offset=${params.offset}`
    }else{
        PARAMS = `offset=${params.offset}`
    }
    return new Promise((resolve, reject) => {
        http
            .get(`characters?${PARAMS}`)
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export default {
    list
}