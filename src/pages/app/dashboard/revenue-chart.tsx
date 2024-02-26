import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import colors from 'tailwindcss/colors'

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 800 },
  { date: "12/12", revenue: 1300 },
  { date: "13/12", revenue: 1500 },
  { date: "14/12", revenue: 1000 },
  { date: "15/12", revenue: 1050 },
  { date: "16/12", revenue: 950 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="it flex-row justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita do pedido
          </CardTitle>
          <CardDescription>Receita diária do pedido</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
              <XAxis 
                dataKey="date"
                tickLine={false}
                axisLine={false}
                dy={16}
              >

              </XAxis>

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
              />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet[400]}>
            </Line>

          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
