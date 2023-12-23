import LoginForm from "../features/users/LoginForm";
import Button from "./Button";
import Modal from "./Modal";

function LoginButton() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="login-form">
          <Button>Login</Button>
        </Modal.Open>
        <Modal.Window name="login-form">
          <LoginForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default LoginButton;
