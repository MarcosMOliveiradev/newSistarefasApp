export type codigoDTO = {
    id: string,
    codigo: number,
    setor: string,
    descricao: string,
    usuario : {
        nome: string,
        matricula: number
    }
}