export type activityDTO = {
    id: string,
    index_atividade_tarefa: number,
    id_documento: string,
    quantidade_de_folhas: string,
    hora_inicio: string,
    hora_termino: string,
    data: string,
    usuario: {
        nome: string,
        matricula: number,
    }
    Tarefas: {
        codigo: number,
        setor: string,
        descricao: string
    }
}