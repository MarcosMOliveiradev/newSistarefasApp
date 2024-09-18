import { Button } from "./ui/button";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "./ui/select";

export function ButtonFilter() {
    return (
        <Button asChild>
            <Select defaultValue="setor">
                <SelectTrigger className="w-[180px] text-sm " >
                    <SelectValue/>
                </SelectTrigger >
                <SelectContent>
                    <SelectItem value="setor">Setor</SelectItem>
                    <SelectItem value="codigo">Código</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                    <SelectItem value="id">Id documento</SelectItem>
                </SelectContent>
            </Select>
        </Button>
    );
}