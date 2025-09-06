import type { Service } from "@/types";
import { Briefcase, Zap, Shield, Users, Globe, CreditCard, PieChart } from "lucide-react";

export const services: Service[] = [
  {
    title: "Business Accounts",
    description:
      "Manage multiple accounts for your business with easy tracking, reporting, and advanced tools.",
    category: "Business",
    icon: Briefcase,
  },
  {
    title: "Fast Payments",
    description:
      "Send and receive payments instantly with minimal fees and maximum security.",
    category: "Payments",
    icon: Zap,
  },
  {
    title: "Secure Transactions",
    description:
      "All transactions are encrypted and protected by industry-standard security protocols.",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Collaboration Tools",
    description:
      "Invite team members, assign roles, and collaborate seamlessly on your accounts.",
    category: "Business",
    icon: Users,
  },
  {
    title: "Analytics Dashboard",
    description: "Track your transactions, balances, and insights in real time.",
    category: "Analytics",
    icon: PieChart,
  },
  {
    title: "Global Transfers",
    description: "Send money worldwide with minimal fees and reliable processing.",
    category: "Payments",
    icon: Globe,
  },
  {
    title: "Multiple Payment Options",
    description:
      "Connect your bank accounts, cards, and digital wallets for seamless transactions.",
    category: "Payments",
    icon: CreditCard,
  },
  {
    title: "Business Insights",
    description: "Get detailed reports and actionable insights for smarter decision-making.",
    category: "Analytics",
    icon: PieChart,
  },
];

export const categories = [
  "All",
  "Business",
  "Payments",
  "Security",
  "Analytics",
];
