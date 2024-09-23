import { env } from '@/env'
import { AppErrors } from '@/utils/appErrors';
import axios, { AxiosInstance } from 'axios'

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
    registerInterceptTokenManeger: (signOut: SignOut) => () => void
}

export const api = axios.create({
    baseURL: env.VITE_API_URL
}) as APIInstanceProps

    api.registerInterceptTokenManeger = signOut => {
        const InterceptTokenManeger = api.interceptors.response.use(response => response, requestError => {
            if (requestError?.response?.status === 400) {
                if (requestError.response.data.message === 'Unauthorized' || requestError.response.data.message === 'invalid') {
                    signOut()
                }
            }
            if(requestError.response && requestError.response.data) {
                return Promise.reject(new AppErrors(requestError.response.data.message))
            } else {
                return Promise.reject(requestError)
            }
        })

        return () => {
            api.interceptors.response.eject(InterceptTokenManeger);
        };
    }