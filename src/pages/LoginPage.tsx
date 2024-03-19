import { SubmitHandler, useForm } from "react-hook-form";
import { Login } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log({ data });
    reset();
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("email")} placeholder="email" type="email" required />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default LoginPage;
