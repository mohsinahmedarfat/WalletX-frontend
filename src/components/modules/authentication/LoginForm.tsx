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
import config from "@/config";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/feature/auth/auth.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const form = useForm();
  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("data from login form", data);
    try {
      const res = await login(data).unwrap();
      console.log(res);

      if (res.success) {
        toast.success("Logged in successfully.");
        navigate("/");
      }
    } catch (err: any) {
      console.error("error from login form", err);

      if (err.status === 401) {
        toast.error("Your account is not verified");
        navigate("/verify", { state: data.email }); // save email in navigate state to catch the email in verify page
      }
      
      if (err.data?.message === "Email does not exist!") {
        toast.error("Email does not exist! Please try again.");
      }
      if (err.data?.message === "Incorrect password!") {
        toast.error("Incorrect password! Please try again.");
      }
    }
  };

    // 👇 Demo credentials
  const handleDemoLogin = (role: "agent" | "admin") => {
    if (role === "agent") {
      form.setValue("email", "agent@gmail.com");
      form.setValue("password", "Abc123@#");
    } else {
      form.setValue("email", "admin@gmail.com");
      form.setValue("password", "Abc123@#");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>

        {/* 👇 Demo buttons */}
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            className="w-1/2"
            onClick={() => handleDemoLogin("agent")}
          >
            Demo Agent
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-1/2"
            onClick={() => handleDemoLogin("admin")}
          >
            Demo Admin
          </Button>
        </div>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        <Button
          onClick={() => window.open(`${config.baseUrl}/auth/google`)}
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
        >
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </div>
  );
}
