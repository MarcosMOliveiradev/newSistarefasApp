import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "./ui/select";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";

const searchType = z.object({
    search: z.string().or(z.number()),
    filterType: z.string()
})

type SearchType = z.infer<typeof searchType>


export function ButtonFilter() {
    const { register, handleSubmit, control, formState: { isSubmitted } } = useForm<SearchType>()

    function searchActivity(data: SearchType) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(searchActivity)} className="flex justify-center items-center gap-4">
            <Search className="h-10 w-10 text-muted-foreground"/>
            <Input id="pesquisar " placeholder="Pesquisar" {...register('search')} />
            <Controller
                name="filterType"
                control={control}
                render={({ field: { name, onChange, value, disabled }}) => {
                    return (
                        <Select 
                            defaultValue="setor"
                            name={name}
                            onValueChange={onChange}
                            value={value}
                            disabled={disabled}
                        >
                            <SelectTrigger className="w-[180px] text-sm">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="setor">Setor</SelectItem>
                                <SelectItem value="codigo">Código</SelectItem>
                                <SelectItem value="data">Data</SelectItem>
                                <SelectItem value="id">Id documento</SelectItem>
                            </SelectContent>
                        </Select>
                    );
                }}
            />
            <Button type="submit">Pesquisar</Button>
        </form>
    );
}
