import styled from "styled-components";
import FormRowVertical from "./FormRowVertical";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/signup/useSignup";

const Container = styled(Form)`
  margin: 0 auto;
  max-width: 80rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 3.2rem;
  border-radius: 10px;

  padding: 4rem;
  background-color: var(--color-brand-200);
`;

const SignupButton = styled(Button)`
  align-self: end;
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ userName, email, password }) {
    signup(
      { userName, email, password },
      {
        onSettled: () => reset,
      }
    );
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Username" error={errors?.userName?.message}>
        <Input
          id="userName"
          disabled={isLoading}
          {...register("userName", { required: "A user needs a name." })}
        />
      </FormRowVertical>

      <FormRowVertical label="Email" error={errors?.email?.message}>
        <Input
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Please provide a email address to verify your account.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address.",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical label="Password" errors={errors?.password?.message}>
        <Input
          id="password"
          type="password"
          disabled={isLoading}
          {...register("password", {
            required: "Please provide a proper password!",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters.",
            },
          })}
        />
      </FormRowVertical>

      <SignupButton disabled={isLoading}>Sign Up</SignupButton>
    </Container>
  );
}

export default SignupForm;
