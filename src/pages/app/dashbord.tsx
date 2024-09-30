import PerfilDefalt from '@/assets/perfilDefalt.png'
import { TotalAtividadeMes } from '@/components/dashboard/totaAtividadeMes';
import { MyChart } from '@/components/myChart';

export function Dashboard() {
    return (
        <div className="grid grid-cols-2 py-4 w-full">
            <div className="justify-center flex">
                <div className="flex flex-col items-center w-[12rem] h-[13rem] bg-orange rounded-lg justify-around">
                    <img src={PerfilDefalt} alt="Foto de perfil" className="w-[103px] h-[103]"/>
                    <p>Marcos Monteiro</p>
                    <p>984</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className="flex flex-col justify-center items-center bg-orange w-[12rem] h-[6rem] rounded-lg text-primary gap-2">
                    <h3 className='text-center'>Tempo total de atividades</h3>
                    <p>4:12:13</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-orange w-[12rem] h-[6rem] rounded-lg text-primary gap-2">
                    <h3 className='text-center'>Total de atividades</h3>
                    <p>86</p>
                </div>
                <div className="flex flex-col justify-center items-center bg-orange w-[12rem] h-[6rem] rounded-lg text-primary gap-2">
                    <h3 className='text-center'>Tempo total de atividades no mês</h3>
                    <p>12:01:13</p>
                </div>
                <TotalAtividadeMes />
            </div>

            <div className='col-span-2'>
                <MyChart/>
            </div>
        </div>
    );
}