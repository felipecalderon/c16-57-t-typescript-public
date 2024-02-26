import { decode } from 'jsonwebtoken'
import { envs } from '../config/plugins/envs/envs.plugin'

export const decodeToken = (bearerToken: string) => {
    try {
        const [_bearer, token] = bearerToken.split(' ')
        if(!token) throw 'No se reconoce token'
        const decodedToken = decode(token, {
            json: true,
        })
        return decodedToken
    } catch (error) {
        throw error
    }
}