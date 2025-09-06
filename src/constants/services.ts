import type { Service } from "@/types";
import { Briefcase, Zap, Shield, Users } from "lucide-react";

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
    icon: Zap,
  },
];

export const categories = ["All", "Business", "Payments", "Security", "Analytics"];
