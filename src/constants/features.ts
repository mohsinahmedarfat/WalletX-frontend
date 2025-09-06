import type { Feature } from "@/types";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

export const features: Feature[] = [
  {
    title: "Easy to Use",
    description:
      "Our platform is designed with simplicity in mind, so you can get started quickly without any hassle.",
    icon: CheckCircle,
  },
  {
    title: "Fast & Reliable",
    description:
      "Enjoy lightning-fast performance and uptime reliability for all your projects and workflows.",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description:
      "Your data is protected with industry-standard security practices to ensure safety and privacy.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description:
      "Work seamlessly with your team and share resources effortlessly across different projects.",
    icon: Users,
  },
];
