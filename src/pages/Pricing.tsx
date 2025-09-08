import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    description: "For individuals getting started.",
    features: ["1 project", "Basic analytics", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Perfect for professionals and small teams.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority email support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Best for large organizations with advanced needs.",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "24/7 premium support",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade, downgrade, or cancel your plan anytime directly from your dashboard.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes, we offer a 20% discount if you choose annual billing instead of monthly.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "We offer a 14-day free trial on all plans. No credit card required.",
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
        {/* <Button size="lg">Start Free Trial</Button> */}
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`border shadow-sm hover:shadow-md transition ${
              plan.highlighted ? "border-primary shadow-lg" : ""
            }`}
          >
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <p className="text-3xl font-bold">{plan.price}</p>
              <p className="text-muted-foreground text-sm mt-2">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              {/* <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
              >
                Choose {plan.name}
              </Button> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mb-20 overflow-x-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Compare Plans
        </h2>
        <table className="w-full border-collapse border text-sm">
          <thead>
            <tr className="bg-muted text-left">
              <th className="border p-3">Features</th>
              {plans.map((plan, i) => (
                <th key={i} className="border p-3 text-center">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">Projects</td>
              <td className="border p-3 text-center">1</td>
              <td className="border p-3 text-center">Unlimited</td>
              <td className="border p-3 text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="border p-3">Analytics</td>
              <td className="border p-3 text-center">Basic</td>
              <td className="border p-3 text-center">Advanced</td>
              <td className="border p-3 text-center">Custom</td>
            </tr>
            <tr>
              <td className="border p-3">Support</td>
              <td className="border p-3 text-center">Email</td>
              <td className="border p-3 text-center">Priority Email</td>
              <td className="border p-3 text-center">24/7 Premium</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Pricing FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm">
              <h3 className="font-medium">{faq.question}</h3>
              <p className="text-muted-foreground text-sm mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
