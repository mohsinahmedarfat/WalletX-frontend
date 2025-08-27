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

const WithdrawMoneyForm = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const form = useForm();
  const navigate = useNavigate();

  const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Sending...");

    try {
      const res = await withdrawMoney({
        userEmail: data.email,
        amountData: { amount: Number(data.amount) },
      }).unwrap();

      if (res.success) {
        toast.success("Sent Successfully.", { id: toastId });
      }

      navigate("/agent/transactions");
    } catch (error) {
      console.error("Failed to send money", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Withdraw Money</h1>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center gap-5 ">
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="string"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button disabled={isLoading} type="submit">
                Send
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WithdrawMoneyForm;
