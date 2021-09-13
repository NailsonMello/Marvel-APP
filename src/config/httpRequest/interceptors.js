import utils from "../../utils"
import { PUBLIC_KEY } from '../../utils/constants'

export const addInterceptors = http => {

    http.interceptors.response.use(
        response => {
            return response
        },
        error => {
            if (!error.response) {
                console.log("error 503 = ", error)
            } else if (error.response.status === 404) {
                alert(error.response.data.message)
                console.log("error 404 = ", error.response.status)
            } else if (error.response.status === 401) {
                alert(error.response.data.message)
                console.log("error 401 = ", error.response.data.message)
            } else {
                alert(error.response.data.message)
                console.log(error.response.status)
                console.log(error.response.data)
            }

            return Promise.reject(error)
        }
    )

    http.interceptors.request.use(
        async config => {
            config.params = {
                ...config.params,
                ts: utils.timestamp(),
                orderBy: '-name',
                limit: 20,
                apikey: PUBLIC_KEY,
                hash: utils.hash().hex()
            }
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )
    return http
}