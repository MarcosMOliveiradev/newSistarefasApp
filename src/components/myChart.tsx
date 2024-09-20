"use client"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const data = [
    {
        contagem: 'Xerox',
        total: 893,
    },
    {
        contagem: 'Baixa notas Refeitório',
        total: 95,
    },
]

const config = {
    dourado: {
        color: "#E99F49"
    }
} satisfies ChartConfig
export function MyChart() {
    return (
        <Card className="mt-4 mx-5">
            <CardHeader>
                <CardTitle>Quantidade de atividades</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer className="h-[12rem] w-full" config={config}>
                    <BarChart accessibilityLayer data={data} >
                        <CartesianGrid strokeWidth={2} vertical={false}  />
                        <XAxis dataKey="contagem" tickLine={false} tickMargin={10} axisLine={false}  tickFormatter={(value) => value} />
                        <YAxis dataKey="total" tickLine={false} tickMargin={10} axisLine={false}  tickFormatter={(value) => value} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Bar dataKey="total"  fill="var(--color-dourado)" radius={8} >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>

    );
}