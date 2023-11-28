import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useLogout } from "../features/users/useLogout";

function LogoutButton() {
  const { isLoading, logout } = useLogout();

  function onLogoutClicked() {
    logout();
  }

  return (
    <ButtonIcon disabled={isLoading} onClick={onLogoutClicked}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default LogoutButton;
