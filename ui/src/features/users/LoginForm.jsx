import { useForm } from "react-hook-form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useLogin } from "./useLogin";
import toast from "react-hot-toast";
import Form from "../../components/Form";

function LoginForm({ onCloseModal }) {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isLoading, login } = useLogin();
  const { errors } = formState;

  function onSubmit(data) {
    login(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.error(errors);
    toast.error("Could not login to WanderTag.");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type="modal">
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="text"
          id="email"
          disabled={isLoading}
          defaultValue="dominic@test.de"
          {...register("email", {
            required: "Please provide your email.",
          })}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          defaultValue="secure"
          {...register("password", {
            required: "Please provide your password.",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal()}
        >
          Cancel
        </Button>

        <Button disabled={isLoading}>Login</Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
