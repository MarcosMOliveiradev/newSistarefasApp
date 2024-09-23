import { userDTO } from "@/dtos/userDTO";
import { api } from "@/lib/axios";
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "@/storage/StorageAuthToken";
import { StorageUserGet, storageUserRemove, storageUserSave } from "@/storage/StorageUser";
import { createContext, ReactNode, useEffect, useState } from "react";

// tipagem de login
export interface SignInBody {
    matricula: number,
    password: string
}

//  Contexto
export type AuthContextDataProps =  {
    user: userDTO;
    signIn: ({ matricula, password }: SignInBody) => Promise<void>;
    signOut: () => Promise<void>
    isLoadingUserStorageData: boolean;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

type AuthContextProviderProps = {
    children: ReactNode
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<userDTO>({} as userDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

    async function UserAndTokenUpdate(user:userDTO, token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setUser(user)
    }

    async function signIn({ matricula, password }: SignInBody) {
        try {
            const { data } = await api.post('/usuario/', { matricula, password })
            const response = await api.get('/usuario/profile', {headers: {Authorization: `Bearer ${data}`}})

            const apiUser = response.data

            if ( apiUser && data ) {
                setIsLoadingUserStorageData(true)

                await storageUserSave(apiUser)
                await storageAuthTokenSave(data)

                UserAndTokenUpdate(apiUser, data)
            }
        } catch (err) {
            throw err;
        } finally {
            setIsLoadingUserStorageData(false)
        }
    }

    async function loadUserData() {
        try {
            setIsLoadingUserStorageData(true)

            const userLogged = await StorageUserGet()
            const token = await storageAuthTokenGet()
    
            if(token && userLogged) {
                UserAndTokenUpdate(userLogged, token)
            }
        } catch(err) {
            throw err
        } finally {
            setIsLoadingUserStorageData(false)
        }
    }

    async function signOut() {
        try {
            setIsLoadingUserStorageData(true)
            setUser({} as userDTO)
            await storageUserRemove()
            await storageAuthTokenRemove()
        } catch (error) {
            throw error
        } finally {
            setIsLoadingUserStorageData(false)
        }
    }

    useEffect(() => {
        loadUserData()
    }, []);

    useEffect(() => {
        const subscribe = api.registerInterceptTokenManeger(signOut)

        return () => {
            subscribe()
        }
    })

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut,
            isLoadingUserStorageData,
        }}>
            { children }
          </AuthContext.Provider>
    );
}


