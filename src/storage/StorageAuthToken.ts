import { USER_TOKEN_STORAGE } from './StorageConfig'

export async function storageAuthTokenSave(token: string) {
    await localStorage.setItem(USER_TOKEN_STORAGE, token)
}

export async function storageAuthTokenGet() {
    const token = await localStorage.getItem(USER_TOKEN_STORAGE)
    return token
}

export async function storageAuthTokenRemove() {
    await localStorage.removeItem(USER_TOKEN_STORAGE)
}