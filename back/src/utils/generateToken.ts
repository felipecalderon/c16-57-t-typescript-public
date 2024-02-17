import jwt from 'jsonwebtoken'
import { envs } from '../config/plugins/envs/envs.plugin';
// Generar un token
export const generateToken = (userId: string) => {
    const { SECRET_JTW } = envs
    const token = jwt.sign({ userId }, SECRET_JTW, { expiresIn: '1h' });
    return token
}