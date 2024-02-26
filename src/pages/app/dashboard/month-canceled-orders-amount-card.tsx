import { DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
    <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
      <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
      <DollarSign className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent className="space-y-1">
      <span className="text-2xl font-bold tracking-tight">32</span>
      <p className="text-xs text-muted-foreground">
        <span className="text-rose-500 dark:text-rose-400">-2%</span>
        {" "}em relação ao mês passado
      </p>
    </CardContent>
  </Card>
  )
}