import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { mutate, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={mutate}>
      {isLoading ? <SpinnerMini /> : "Logout"}
    </ButtonIcon>
  );
}

export default Logout;
