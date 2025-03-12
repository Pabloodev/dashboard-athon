import {
    ChartColumn,
    PhoneCall,
    DollarSign,
    Users,
    HandHeart,
    ChartNoAxesColumnIncreasing,
  } from "lucide-react";

const links = [
    {
        name: "Dashboard Geral",
        href: "/dashboard",
        icon: ChartColumn
    },
    {
        name: "Atendimento N1",
        href: "/dashboard/suporte",
        icon: PhoneCall,
        iconColor: "#0fafff"
    },
    {
        name: "Financeiro",
        href: "/dashboard/financeiro",
        icon: DollarSign,
        iconColor: "#93ff0f"
    },
    {
        name: "Comercial",
        href: "/dashboard/comercial",
        icon: Users,
        iconColor: "#7000a3"
    },
    {
        name: "Retenção",
        href: "/dashboard/retencao",
        icon: HandHeart,
        iconColor: "#fea9ef"
    },
    {
        name: "Qualidade",
        href: "/dashboard/qualidade",
        icon: ChartNoAxesColumnIncreasing,
        iconColor: "#a33900"
    },
]

export { links }