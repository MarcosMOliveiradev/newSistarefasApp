import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import Autoplay from 'embla-carousel-autoplay'

  import img01 from '@/assets/07DICASPJA/1.jpg'
  import img02 from '@/assets/07DICASPJA/2.jpg'
  import img03 from '@/assets/07DICASPJA/3.jpg'
  import img04 from '@/assets/07DICASPJA/4.jpg'
  import img05 from '@/assets/07DICASPJA/5.jpg'
  import img06 from '@/assets/07DICASPJA/6.jpg'
  import img07 from '@/assets/07DICASPJA/7.jpg'
  import img08 from '@/assets/07DICASPJA/8.jpg'
  import img09 from '@/assets/07DICASPJA/9.jpg'

export function Home() {
    return (
        <div className="flex flex-col ml-5 mr-5 sm:h-[20rem] justify-around">
            <div>
                <span className="text-lg">Murual</span>
                <Carousel className="flex flex-col" plugins={[
                    Autoplay({
                        delay: 4000,
                    })
                ]}>
                    <CarouselContent >
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img01} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img02} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img03} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img04} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img05} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img06} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img07} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img08} /></CarouselItem>
                        <CarouselItem><img className="w-full h-[40rem] sm:h-[22rem] rounded-lg" src={img09} /></CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>

            <Carousel className="flex flex-col mt-10" plugins={[
                    Autoplay({
                        delay: 5000,
                    })
                ]}>
                    <CarouselContent>
                        <CarouselItem>
                            <span className="flex w-[20rem] font-[700]">Está com dúvidas em alguma atividade?
                            Chama o monitor que ele te ajuda!</span>
                            <p className="flex w-[60rem] ">Tenha cuidado ao fazer as atividades da empresa, algumas dessas atividades não podem ser refeitas e acabam prejudicando na execução dos serviços dos outros setores, caso tenha dúvidas na hora de fazer, chame pelo monitor ou coordenador do programa.</p>
                        </CarouselItem>
                    </CarouselContent>
            </Carousel>

        </div>
    );
}