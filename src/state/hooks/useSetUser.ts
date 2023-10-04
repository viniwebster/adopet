import { usersListState } from "state/atom";
import { useSetRecoilState } from "recoil";
import { IUser } from "interfaces/IUser";

const useSetUser = () => {
  const setUser = useSetRecoilState<IUser[]>(usersListState);
  return (newUser: IUser) => {
    setUser((user) => [...user, newUser]);
  };
};

export default useSetUser