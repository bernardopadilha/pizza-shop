import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInInForm = z.object({
  email: z.string().email(),
});

type SingInForm = z.infer<typeof signInInForm>;

export function SignIn() {
  const [ searchParams ] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSingIn(data: SingInForm) {
    try {
      await authenticate({ email: data.email });

      toast.success("Enviamos um lik de autenticação para seu e-mail", {
        action: {
          label: "Reenviar",
          onClick: () => handleSingIn(data),
        },
      });
    } catch (err) {
      toast.error("Sua autenticação falhou");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant={"outline"} asChild className="absolute right-4 top-8">
          <Link to="/sign-up">Novo estabelicimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSingIn)} className="space-y-4">
            <div className="space-y-2">
              <Label>Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")}></Input>
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
