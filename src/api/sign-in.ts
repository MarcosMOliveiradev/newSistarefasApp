import { api } from "@/lib/axios";

export interface singInBody {
    matricula: number,
    password: string
}

export async function signIn({ matricula, password }: singInBody) {
    const { data } = await api.post('/usuario/', { matricula, password })

    localStorage.setItem('@SisTarefasToken', data)
}