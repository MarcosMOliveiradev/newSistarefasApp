import { userDTO } from "@/dtos/userDTO";
import { USER_STORAGE } from "./StorageConfig";

export async function storageUserSave(user: userDTO) {
    await localStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function StorageUserGet() {
    const storage = await localStorage.getItem(USER_STORAGE)
    const user: userDTO = storage ? JSON.parse(storage) : {}
    return user
}

export async function storageUserRemove() {
    await localStorage.removeItem(USER_STORAGE)
}