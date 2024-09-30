import { getTotalActivity } from "@/api/get-total-activity";
import { userDTO } from "@/dtos/userDTO";
import { useQuery } from "@tanstack/react-query";

export function TotalAtividadeMes() {
    const user = localStorage.getItem('@SisTarefasUser')
    const matricula: userDTO = JSON.parse(user ?? '')
    const { data: totalAtividade } = useQuery({
        queryKey: ['totalAtividade'],
        queryFn: async () => await getTotalActivity(matricula.matricula)
    })

    console.log(totalAtividade)
    return (
        <div className="flex flex-col justify-center items-center bg-orange w-[12rem] h-[6rem] rounded-lg text-primary gap-2">
            <h3 className='text-center'>Total de atividades no mês</h3>
            <p>180</p>
        </div>
    );
}