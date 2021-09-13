import axios from 'axios'
import { addInterceptors } from './interceptors'

let _instance = null

const DEFAULT_BASE_URL = 'http://gateway.marvel.com/v1/public'

const getInstance = () => {
    if (_instance == null) {
        _instance = axios.create({
            baseURL: DEFAULT_BASE_URL
        })
    }
    
    _instance = addInterceptors(_instance)
    return _instance
}

export default getInstance()