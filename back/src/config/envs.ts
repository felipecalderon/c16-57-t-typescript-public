import {config} from 'dotenv'
config()

export const envs = {
    PORT: process.env.port || 3001
}