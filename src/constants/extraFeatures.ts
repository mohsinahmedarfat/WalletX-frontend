import type { Feature } from "@/types";
import { ShieldCheck, BarChart, Globe, CreditCard } from "lucide-react";

export const extraFeatures: Feature[] = [
  {
    title: "Advanced Security",
    description:
      "Multi-factor authentication, encryption, and fraud detection to keep your account and transactions safe.",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track your spending, transfers, and earnings with real-time charts and insights.",
    icon: BarChart,
  },
  {
    title: "Global Reach",
    description:
      "Send and receive money across borders with minimal fees and maximum reliability.",
    icon: Globe,
  },
  {
    title: "Multiple Payment Options",
    description:
      "Link your bank accounts, cards, and digital wallets for seamless transactions.",
    icon: CreditCard,
  },
];
