/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useWithdrawMoneyMutation } from "@/redux/feature/wallet/wallet.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSignIcon, Mail } from "lucide-react";

const WithdrawMoneyForm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const form = useForm();
  const navigate = useNavigate();

  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Withdrawing...");

    try {
      const res = await withdrawMoney({
        userEmail: data.email,
        amountData: { amount: Number(data.amount) },
      }).unwrap();

      if (res.success) {
        toast.success("Withdrawal Successfully.", { id: toastId });
      }

      navigate("/user/analytics");
    } catch (error: any) {
      console.error("Failed to withdraw money", error);
      toast.error(`${error?.data?.message}`, { id: toastId });
    }
  };

  return (
    <Card className={cn("max-w-md mx-auto shadow-lg border border-gray-200", className)} {...props}>
      <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg py-4">
        <CardTitle className="text-2xl font-bold">Withdraw Money</CardTitle>
      </CardHeader>
      <CardContent className="px-6 py-4 flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipient Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        className="pl-9"
                        placeholder="john@example.com"
                        {...field}
                        value={field.value || ""}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <DollarSignIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        type="number"
                        min={1}
                        className="pl-9"
                        placeholder="Enter amount"
                        {...field}
                        value={field.value || ""}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Withdrawing..." : "Withdraw Money"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default WithdrawMoneyForm;
