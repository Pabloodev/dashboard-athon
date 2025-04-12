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
        name: "Geral",
        href: "/",
        icon: ChartColumn
    },
    {
        name: "Atendimento N1",
        href: "/suporte",
        icon: PhoneCall,
        iconColor: "#0fafff"
    },
    {
        name: "Financeiro",
        href: "/financeiro",
        icon: DollarSign,
        iconColor: "#93ff0f"
    },
    {
        name: "Comercial",
        href: "/comercial",
        icon: Users,
        iconColor: "#7000a3"
    },
    {
        name: "Retenção",
        href: "/retencao",
        icon: HandHeart,
        iconColor: "#fea9ef"
    },
    {
        name: "Qualidade",
        href: "/qualidade",
        icon: ChartNoAxesColumnIncreasing,
        iconColor: "#a33900"
    },
]

export { links }